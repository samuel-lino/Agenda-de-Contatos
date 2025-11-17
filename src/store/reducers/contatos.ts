import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enum/contato'

type contatosstate = {
  itens: Contato[]
}

const initialState: contatosstate = {
  itens: [
    {
      id: 1,
      nome: 'Samuel Eduardo',
      email: 'email234@gmail.com',
      tel: '(00)00000-0000',
      grupos: [enums.grupos.AMIGOS]
    },
    {
      id: 2,
      nome: 'Maria Antonela',
      email: 'email234@gmail.com',
      tel: '(00)00000-0000',
      grupos: [enums.grupos.AMIGOS, enums.grupos.TRABALHO]
    },
    {
      id: 3,
      nome: 'Luiz mota',
      email: 'email234@gmail.com',
      tel: '(00)00000-0000',
      grupos: [enums.grupos.AMIGOS]
    }
  ]
}
const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    salvar: (state, action: PayloadAction<Contato>) => {
      const conattoid = state.itens.findIndex((c) => c.id === action.payload.id)
      console.log(conattoid)

      if (conattoid >= 0) {
        state.itens[conattoid] = action.payload
        console.log(state.itens[conattoid].grupos)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { salvar, remover } = ContatosSlice.actions
export default ContatosSlice.reducer
