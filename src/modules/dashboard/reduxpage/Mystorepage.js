import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Myslicerfunc'

export const mystore = configureStore({
    reducer: {
        counter:counterSlice
    },
  })