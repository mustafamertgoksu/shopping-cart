import { createSlice } from '@reduxjs/toolkit';
import { items } from '../items';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: items,
    amount: 0,
    total: 0,
    isLoading: true,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId  = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId); 
    },
    increase: (state, {payload}) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.amount = item.amount + 1;
    },
    decrease: (state, {payload}) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if(item.amount >= 1) {
        item.amount = item.amount - 1;
      } 
    },
    handleTotals: (state) => {
      var amount = 0;
      var total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, handleTotals } = cartSlice.actions;
