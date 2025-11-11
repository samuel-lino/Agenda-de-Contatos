import FiltroCards from '../../components/FiltroCards'
import { BarraLateralS, Filtros } from './style'

const BarraLateral = () => {
  return (
    <>
      <BarraLateralS>
        <Filtros>
          <FiltroCards />
          <FiltroCards />
          <FiltroCards />
        </Filtros>
      </BarraLateralS>
    </>
  )
}

export default BarraLateral
