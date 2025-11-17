import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { ListaContainer } from '../../style'
import { Lista } from './style'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const Contatos = useSelector((state: RootReducer) => state.contatos.itens)
  return (
    <>
      <ListaContainer>
        <Lista>
          {Contatos.map((contato) => (
            <Contato
              key={contato.id}
              id={contato.id}
              nome={contato.nome}
              tel={contato.tel}
              email={contato.email}
              grupos={contato.grupos}
            />
          ))}
        </Lista>
      </ListaContainer>
    </>
  )
}

export default ListaDeContatos
