import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Botaocadastrar, Container } from './style'
import store from './store'
import ModalNovoContato from './containers/Modal'
import { useState } from 'react'

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  const fecharModal = () => {
    setModalAberto(false)
  }
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
        <Botaocadastrar onClick={() => setModalAberto(true)}>
          <span className="material-icons">add</span>
        </Botaocadastrar>
        <ModalNovoContato aberto={modalAberto} onClose={fecharModal} />
      </Container>
    </Provider>
  )
}

export default App
