import { configureStore } from '@reduxjs/toolkit';
import sliderSlice from '../features/Slices/SliderSlice';
import productslice  from '../features/Slices/ProductSlice';
import authSlice from '../features/Slices/authSlice';
import CartSlice from '../features/Slices/CartSlice';

export const store = configureStore({
  reducer: {
    slider:sliderSlice,
    products : productslice,
    cart:CartSlice,
    auth:authSlice
  },
});
