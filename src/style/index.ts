import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none
  }
  body{
    background-color: #d4d8dbff;
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

export const Botaocadastrar = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #0ac50ae5;
  width: 76px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 4px;
  border: none;
  span {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }
`

export default EstiloGlobal
