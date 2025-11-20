import styled from 'styled-components'

export const Modalprincipal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`
export const Modal = styled.div`
  background: #bce0e2ff;
  border-radius: 12px;
  padding: 24px;
  width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 48px;
  }
`
export const Formulario = styled.form`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  font-size: 32px;
  width: 100%;
  gap: 8px;
  label {
    display: flex;
    text-align: center;
    input {
      margin-right: 8px;
      transform: scale(1.5);
    }
  }
  button {
    width: 80px;
    display: flex;
    justify-content: center;
  }
`
export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Campos = styled.input`
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  font-size: 32px;
  background-color: transparent;
`
export const GruposLista = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`
export const BotaoCancelar = styled.button`
  background-color: red;
`

export const Botaoadicionar = styled.button`
  background-color: green;
`
