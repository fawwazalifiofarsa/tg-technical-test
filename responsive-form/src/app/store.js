import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../middleware/UserSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});