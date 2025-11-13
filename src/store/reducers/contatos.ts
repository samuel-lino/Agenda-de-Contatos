import { createSlice } from '@reduxjs/toolkit'
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
  reducers: {}
})
