import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none
  }
  body{
    background-color: #9ab4dbff;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 228px auto;
  grid-gap: 32px;
`
export const ListaContainer = styled.main`
  border-radius: 16px;
  height: calc(100vh - 160px);
  overflow-y: scroll;
`

export default EstiloGlobal
