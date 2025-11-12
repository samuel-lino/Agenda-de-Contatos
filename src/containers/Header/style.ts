import styled from 'styled-components'

export const Cabecalho = styled.header`
  width: 100vw;
  height: 128px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #ade;
`
export const Pesquisar = styled.input`
  width: 30vw;
  height: 5vh;
  font-size: 24px;
  border: none;
  background-color: #727277ff;
  padding: 8px;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  &::placeholder {
    color: #fff;
  }
`
