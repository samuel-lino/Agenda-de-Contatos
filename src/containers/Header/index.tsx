import FiltroCards from '../../components/FiltroCards'
import Titulo from '../../components/Titulo'
import { Cabecalho, Filtros } from './style'

const Header = () => {
  return (
    <>
      <Cabecalho>
        <Titulo>Agenda De contatos</Titulo>
        <div>
          <input type="text"></input>
          <button>Buscar</button>
        </div>
        <Filtros>
          <FiltroCards />
          <FiltroCards />
          <FiltroCards />
        </Filtros>
      </Cabecalho>
    </>
  )
}

export default Header
