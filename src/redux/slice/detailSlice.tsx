import {createSlice} from '@reduxjs/toolkit';

interface detailState {}

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        quantity: action.payload.quantity,
        image: action.payload.image,
      };
      state.cart.push(newItem);
    },
  },
});

export const {addToCart} = detailSlice.actions;

// SELECTORS
export const cartSelector = state => state.detail.cart;

export default detailSlice.reducer;
