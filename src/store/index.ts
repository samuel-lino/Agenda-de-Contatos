import { configureStore } from '@reduxjs/toolkit'
import contatsosreducer from './reducers/contatos'
import filterreducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    contatos: contatsosreducer,
    filtros: filterreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
