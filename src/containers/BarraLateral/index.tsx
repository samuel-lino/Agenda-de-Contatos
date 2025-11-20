import FiltroCards from '../../components/FiltroCards'
import { BarraLateralS, Filtros } from './style'
import * as enums from '../../utils/enum/contato'

const BarraLateral = () => {
  return (
    <>
      <BarraLateralS>
        <Filtros>
          <FiltroCards name="Todos" />
          <FiltroCards name={enums.grupos.AMIGOS} />
          <FiltroCards name={enums.grupos.FAMILIA} />
          <FiltroCards name={enums.grupos.TRABALHO} />
        </Filtros>
      </BarraLateralS>
    </>
  )
}

export default BarraLateral
