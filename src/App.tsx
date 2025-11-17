import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './style'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
