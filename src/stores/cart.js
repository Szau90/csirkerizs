import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([
    {
      id: 12,
      name: "Iso Whey Zero",
      description: "Whey protein isolate drink powder with glutamine and BCAA",
      price: 2390,
      calculatedPrice: 2390,
      quantity: 1,
      image: "src/assets/images/csirke_rizs_shop-image2-removebg-preview.png",
    },
  ]);

  const totalItems = cartItems.length;

  const totalQuantity = ref(0);

  const quantity = ref(0);

  const snackbar = ref(false);

  const snackbarText = ref("");

  const timeout = ref(2000);

  const incrementQuantity = (item) => {
    const newItem = item;
    const existingItem = cartItems.value.find((item) => item.id === newItem.id);

    existingItem.quantity++;
    existingItem.calculatedPrice = existingItem.price * existingItem.quantity;
    totalQuantity.value++;
  
  };

  const decrementQuantity = (item) => {
    const itemId = item.id;
    const existingItemIndex = cartItems.value.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (existingItemIndex !== -1) {
      const existingItem = cartItems.value[existingItemIndex];

      if (existingItem.quantity === 1) {
        cartItems.value.splice(existingItemIndex, 1);
        totalQuantity.value--;
      } else {
        existingItem.quantity--;
        existingItem.calculatedPrice =
          existingItem.price * existingItem.quantity;
        totalQuantity.value--;
       
      }
    }
  };

  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (total, item) => total + item.calculatedPrice,
      0
    );
  });

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
      snackbarText.value = newItem.name;
    } else {
      existingItem.quantity += newItem.quantity;
      existingItem.calculatedPrice += newItem.price * newItem.quantity;
      snackbarText.value = existingItem.name;
    }
    totalQuantity.value += newItem.quantity;
    quantity.value = newItem.quantity;
    snackbar.value = true;
  };

  const addMealToCart = (meal) => {
    const newMeal = meal;
    const existingMeal = cartItems.value.find((meal) => meal.id === newMeal.id);

    if (!existingMeal) {
      cartItems.value.push({
        id: newMeal.id,
        name: newMeal.name,
        description: newMeal.description,
        price: newMeal.price,
        calculatedPrice: newMeal.price * newMeal.quantity,
        quantity: newMeal.quantity,
        energy: newMeal.energy,
        allergens: newMeal.allergens,
        image: newMeal.image,
        orders: newMeal.orders,
        isMeal: newMeal.isMeal,
        isUpdating: newMeal.isUpdating,
      });
      snackbarText.value = newMeal.name;
    } else {
      existingMeal.quantity += newMeal.quantity;
      existingMeal.calculatedPrice += newMeal.price * newMeal.quantity;
      snackbarText.value = existingMeal.name;
    }
    totalQuantity.value += newMeal.quantity;
    quantity.value = newMeal.quantity;
    snackbar.value = true;
  };

  const updateCartItem = (meal) => {
    const newMeal = meal;
    const existingMeal = cartItems.value.find((meal) => meal.id === newMeal.id);

    existingMeal.quantity = newMeal.quantity;
    existingMeal.calculatedPrice = newMeal.price * newMeal.quantity;

    const itemId = meal.id;
    const existingItemIndex = cartItems.value.findIndex(
      (cartItem) => cartItem.id === itemId
    );

   

      if (newMeal.quantity === 0) {
        cartItems.value.splice(existingItemIndex, 1);
        totalQuantity.value--;
      } 

      existingMeal.isUpdating = false
    }




  const openUpdateModal = (id) => {
    const currentItem = cartItems.value.find((item) => item.id === id);

    currentItem.isUpdating = true;
  };

  const closeUpdateModal = (id) => {
    const currentItem = cartItems.value.find((item) => item.id === id);

    currentItem.isUpdating = false;
  };
 

  const overlay = ref(false);

  return {
    cartItems,
    totalItems,
    totalQuantity,
    quantity,
    totalPrice,
    overlay,
    snackbar,
    snackbarText,
    timeout,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    addMealToCart,
    updateCartItem,
    openUpdateModal,
    closeUpdateModal,
  };
});
