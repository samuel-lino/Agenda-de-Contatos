import { Campo, ContatoCard, DadosContato } from './style'

const Contato = () => {
  return (
    <>
      <ContatoCard>
        <Campo type="text" value="Samuel Eduardo" />
        <DadosContato>
          <span>Telefone:</span>
          <Campo type="text" value="(00)00000-0000" />
        </DadosContato>
        <DadosContato>
          <span>Email:</span>
          <Campo type="email" value="samuelino2006@hotmail.com" />
        </DadosContato>
      </ContatoCard>
    </>
  )
}

export default Contato
