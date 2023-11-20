import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const items = ref([]);

  const totalItems = items.length;

  const totalQuantity = ref(0);

  const quantity = ref(0);

  const totalPrice = () => {
    return items.value.reduce((total, item) => total + item.price, 0);
  };

  const addToCart = (item) => {
    const newItem = item;
    const existingItem = items.value.find((item) => item.id === newItem.id);

    if (!existingItem) {
      items.value.push({
        id: newItem.id,
        name: newItem.title,
        description: newItem.description,
        price: newItem.price,
        quantity: newItem.quantity,
        image: newItem.image
      });
    } else {
      existingItem.price += newItem.price;
      existingItem.quantity += newItem.quantity;
    }
    totalQuantity.value += newItem.quantity;
    quantity.value = newItem.quantity;

    console.log("items:" + items.value);
    console.log("quantity:" + quantity.value);
    console.log("totalquantity:" + totalQuantity.value);
  };

  return { items, totalItems, totalQuantity, quantity, totalPrice, addToCart };
});
