import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed:false
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      state.changed=true;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = newItem.price + existingItem.totalPrice;
      }
    },
    replaceCart (state,action){
        state.items=action.payload.items;
        state.totalAmount=action.payload.totalAmount;
        state.totalQuantity=action.payload.totalQuantity;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      state.changed=true
     
      const existingItem = state.items.find((item) => item.itemId === id);
      
      state.totalAmount = state.totalAmount -existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
