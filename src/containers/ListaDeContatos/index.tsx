import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { ListaContainer } from '../../style'
import { Lista } from './style'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enum/contato'

const ListaDeContatos = () => {
  const Contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const Filtros = useSelector((state: RootReducer) => state.filtros)
  let contatosFiltardos = Contatos

  const filtrando = () => {
    if (Filtros.filtername !== '') {
      contatosFiltardos = contatosFiltardos.filter((c) =>
        c.nome
          .toLocaleLowerCase()
          .includes(Filtros.filtername.toLocaleLowerCase())
      )
    }
    if (Filtros.filtergrupos !== 'Todos') {
      contatosFiltardos = contatosFiltardos.filter((c) =>
        c.grupos.includes(Filtros.filtergrupos as enums.grupos)
      )
    }
  }
  filtrando()

  return (
    <>
      <ListaContainer>
        <Lista>
          {contatosFiltardos.map((contato) => (
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
