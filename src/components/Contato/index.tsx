import { Campo, ContatoCard } from './style'

const Contato = () => {
  return (
    <>
      <ContatoCard>
        <Campo type="text" value="Samuel Eduardo" />
        <h4>
          <span>Telefone:</span>
          <Campo type="text" value="(00)00000-0000" />
        </h4>
        <h4>
          <span>Email:</span>
          <Campo type="email" value="samuelino2006@hotmail.com" />
        </h4>
      </ContatoCard>
    </>
  )
}

export default Contato
