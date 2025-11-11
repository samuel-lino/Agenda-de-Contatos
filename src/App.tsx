import BarraLateral from './containers/BarraLateral'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
