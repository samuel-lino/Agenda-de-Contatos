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
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Formulario = styled.form`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
`
