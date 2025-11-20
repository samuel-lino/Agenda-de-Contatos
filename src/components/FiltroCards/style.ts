import styled from 'styled-components'

export const Cards = styled.div<{ $ativo: boolean }>`
  margin: 10px 8px;
  display: inline-block;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 8px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background-color: #d5e7f3ff;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? '#3b434bff' : '#727377ff')};
  background-color: ${(props) => (props.$ativo ? '#70f1ebff' : '#b2e9e0ff')};
  border: 1px solid ${(props) => (props.$ativo ? '#1e90ff' : '#a1a1a1')};
`
