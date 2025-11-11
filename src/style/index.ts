import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 228px auto;
  grid-gap: 32px;
`

export default EstiloGlobal
