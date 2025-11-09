import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <div>
        <ListaDeContatos />
      </div>
    </>
  )
}

export default App
