import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enum/contato'

type filtrestate = {
  filtername: string
  filtergrupos: enums.grupos | 'Todos'
}

const initialState: filtrestate = {
  filtername: '',
  filtergrupos: 'Todos'
}

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState,
  reducers: {
    mudarfiltername: (state, action: PayloadAction<string>) => {
      state.filtername = action.payload
    },
    mudarfiltergrupos: (state, action: PayloadAction<filtrestate>) => {
      state.filtergrupos = action.payload.filtergrupos
    }
  }
})

export const { mudarfiltergrupos, mudarfiltername } = filtrosSlice.actions
export default filtrosSlice.reducer
