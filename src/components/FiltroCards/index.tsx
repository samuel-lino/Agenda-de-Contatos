import Titulo from '../Titulo'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Cards } from './style'
import * as enums from '../../utils/enum/contato'
import { mudarfiltergrupos } from '../../store/reducers/filtros'

type Props = {
  name: enums.grupos | 'Todos'
}

const FiltroCards = ({ name }: Props) => {
  const dispatch = useDispatch()
  const filtros = useSelector(
    (state: RootReducer) => state.filtros.filtergrupos
  )

  const aplicarFiltro = () => {
    dispatch(mudarfiltergrupos({ filtergrupos: name, filtername: '' }))
  }

  const contatos = useSelector((state: RootReducer) => state.contatos.itens)

  const ativo = () => name === filtros

  let contatosFiltrados = contatos
  const numDeContatos = () => {
    if (name !== 'Todos') {
      contatosFiltrados = contatos.filter((c) => c.grupos.includes(name))
    }
    return contatosFiltrados.length
  }
  return (
    <>
      <Cards $ativo={ativo()} onClick={aplicarFiltro}>
        <Titulo>{name}</Titulo>
        <p>{numDeContatos()}</p>
      </Cards>
    </>
  )
}

export default FiltroCards
