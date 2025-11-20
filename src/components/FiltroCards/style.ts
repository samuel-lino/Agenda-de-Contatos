import styled from 'styled-components'

export const Cards = styled.div<{ $ativo: boolean }>`
  margin: 10px 8px;
  display: inline-block;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  background-color: #d5e7f3ff;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? '#1e90ff' : '#5e5e5e')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
`
