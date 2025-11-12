import Contato from '../../components/Contato'
import { ListaContainer } from '../../style'
import { Lista } from './style'

const ListaDeContatos = () => {
  return (
    <>
      <ListaContainer>
        <Lista>
          <Contato />
          <Contato />
          <Contato />
          <Contato />
          <Contato />
          <Contato />
          <Contato />
          <Contato />
          <Contato />
        </Lista>
      </ListaContainer>
    </>
  )
}

export default ListaDeContatos
