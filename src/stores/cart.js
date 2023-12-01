import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([{id: 12,
    name: 'Iso Whey Zero',
    description: 'Whey protein isolate drink powder with glutamine and BCAA',
    price: 2390,
    calculatedPrice: 2390,
    quantity: 1,
    image: 'src/assets/images/csirke_rizs_shop-image2-removebg-preview.png',},]);

  const totalItems = cartItems.length;

  const totalQuantity = ref(0);

  const quantity = ref(0);

  const incrementQuantity = (item) => {
    const newItem = item;
    const existingItem = cartItems.value.find((item) => item.id === newItem.id);

    
    if (existingItem) {
      existingItem.quantity++;
      existingItem.calculatedPrice = existingItem.price * existingItem.quantity;
      totalQuantity.value++
      console.log("totalquantity:" + totalQuantity.value);
    }
  
  };
  
  const decrementQuantity = (item) => {
    const itemId = item.id;
    const existingItemIndex = cartItems.value.findIndex((cartItem) => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
        const existingItem = cartItems.value[existingItemIndex];

        if (existingItem.quantity === 1) {
            cartItems.value.splice(existingItemIndex, 1);
            totalQuantity.value--;
        } else {
            existingItem.quantity--;
            existingItem.calculatedPrice = existingItem.price * existingItem.quantity;
            totalQuantity.value--;
            console.log("totalquantity:" + totalQuantity.value);
        }
    }
};


  const totalPrice = computed(
    () => {
      return cartItems.value.reduce((total, item) => total + item.calculatedPrice, 0);
    }
  )
 

  const addToCart = (item) => {
    const newItem = item;
    const existingItem = cartItems.value.find((item) => item.id === newItem.id);

    if (!existingItem) {
      cartItems.value.push({
        id: newItem.id,
        name: newItem.name,
        description: newItem.description,
        price: newItem.price * newItem.quantity,
        calculatedPrice: newItem.price * newItem.quantity,
        quantity: newItem.quantity,
        image: newItem.image,
      });
    } else {
      existingItem.quantity += newItem.quantity;
      existingItem.calculatedPrice += newItem.price * newItem.quantity;
    }
    totalQuantity.value += newItem.quantity;
    quantity.value = newItem.quantity;

    console.log("cartItems:" + cartItems.value);
    console.log("quantity:" + quantity.value);
    console.log("totalquantity:" + totalQuantity.value);
  };

  const addMealToCart = (meal) => {
    const newMeal = meal;
    const existingMeal= cartItems.value.find((meal) => meal.id === newMeal.id);

    if (!existingMeal) {
      cartItems.value.push({
        id: newMeal.id,
        name: newMeal.name,
        description: newMeal.description,
        price: newMeal.price * newMeal.quantity,
        calculatedPrice: newMeal.price * newMeal.quantity,
        quantity: newMeal.quantity,
        energy: newMeal.energy,
        allergens: newMeal.allergens,
        image: newMeal.image,
        orders: newMeal.orders,
        isMeal: newMeal.isMeal,
        isUpdating: newMeal.isUpdating
      });
    } else {
      existingMeal.quantity += newMeal.quantity;
      existingMeal.calculatedPrice += newMeal.price * newMeal.quantity;
    }
    totalQuantity.value += newMeal.quantity;
    quantity.value = newMeal.quantity;

    console.log("cartItems:" + cartItems.value);
    console.log("quantity:" + quantity.value);
    console.log("totalquantity:" + totalQuantity.value);
  
  }

  const isUpdating = ref(false)

  const overlay = ref(false)

  return {
    cartItems,
    totalItems,
    totalQuantity,
    quantity,
    totalPrice,
    isUpdating,
    overlay,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    addMealToCart
  };
});
