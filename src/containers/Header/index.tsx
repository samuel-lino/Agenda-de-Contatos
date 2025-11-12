import Titulo from '../../components/Titulo'
import { Cabecalho, Pesquisar } from './style'

const Header = () => {
  return (
    <>
      <Cabecalho>
        <Titulo>Agenda De contatos</Titulo>
        <div>
          <Pesquisar type="text" placeholder="Pesquisar" />
        </div>
      </Cabecalho>
    </>
  )
}

export default Header
