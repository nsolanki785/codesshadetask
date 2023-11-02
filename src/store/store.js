import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../sliced/slicedData'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
