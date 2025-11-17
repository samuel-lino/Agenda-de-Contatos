import styled from 'styled-components'

export const ContatoCard = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  border-radius: 24px;
  padding: 8px;
  background-color: #ade;
  width: 420px;
  font-size: 24px;
  font-weight: bold;
`
export const Campo = styled.input`
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  border-radius: 16px;
  &[disabled] {
    opacity: 1;
    cursor: not-allowed;
    color: inherit !important;
  }
`
export const DadosContato = styled.h4`
  font-size: 24px;
  margin-top: 16px;
  border: solid 0.5px rgba(0, 0, 0, 0.5);
  padding: 4px;
  border-radius: 16px;
`
export const Grupostexto = styled.label`
  font-size: 12px;
  margin: 8px;
`
export const Gruposinput = styled.input`
  margin: 4px;
`
export const Botao = styled.button`
  border-radius: 12px;
  margin: 8px;
  padding: 4px;
  color: #fff;
  border: none;
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
  color: #fff;
`

export const BotaoEditar = styled(Botao)`
  background-color: orange;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: red;
`
