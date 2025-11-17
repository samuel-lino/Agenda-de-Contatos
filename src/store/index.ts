import { configureStore } from '@reduxjs/toolkit'
import contatsosreducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatsosreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
