import Titulo from '../../components/Titulo'
import { Cabecalho } from './style'

const Header = () => {
  return (
    <>
      <Cabecalho>
        <Titulo>Agenda De contatos</Titulo>
        <div>
          <input type="text"></input>
          <button>Buscar</button>
        </div>
      </Cabecalho>
    </>
  )
}

export default Header
