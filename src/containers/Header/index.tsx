import { useDispatch } from 'react-redux'
import Titulo from '../../components/Titulo'
import { Cabecalho, Pesquisar } from './style'
import { mudarfiltername } from '../../store/reducers/filtros'

const Header = () => {
  const dispatch = useDispatch()
  const aplicarfiltro = (texto: string) => {
    dispatch(mudarfiltername(texto))
  }
  return (
    <>
      <Cabecalho>
        <Titulo>Agenda De contatos</Titulo>
        <div>
          <Pesquisar
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => aplicarfiltro(e.target.value)}
          />
        </div>
      </Cabecalho>
    </>
  )
}

export default Header
