import { configureStore } from '@reduxjs/toolkit';
// Buraya daha sonra oluşturacağın slice'ları (reducer) import edeceksin

export const store = configureStore({
  reducer: {
   app: (state = {}) => state
  },
});