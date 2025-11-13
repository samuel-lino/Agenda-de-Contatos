import { Campo, ContatoCard, DadosContato } from './style'
import * as enums from '../../utils/enum/contato'
import { useState } from 'react'

const Contato = () => {
  const [gruposselecionados, setgruposselecionados] = useState<string[]>(
    Object.values(enums.grupos)
  )
  const [estaeditando, setestaeditando] = useState(false)

  const alternarGrupo = (grupo: enums.grupos) => {
    if (gruposselecionados.includes(grupo)) {
      setgruposselecionados(gruposselecionados.filter((g) => g !== grupo))
    } else {
      setgruposselecionados([...gruposselecionados, grupo])
    }
  }

  return (
    <>
      <ContatoCard>
        <Campo disabled={!estaeditando} type="text" value="Samuel Eduardo" />
        <DadosContato>
          <span>Telefone:</span>
          <Campo disabled={!estaeditando} type="text" value="(00)00000-0000" />
        </DadosContato>
        <DadosContato>
          <span>Email:</span>
          <Campo
            disabled={!estaeditando}
            type="email"
            value="samuelino2006@hotmail.com"
          />
        </DadosContato>
        <DadosContato>
          <span>Grupos:</span>
          {Object.values(enums.grupos).map((g) => (
            <label key={g}>
              <Campo
                type="checkbox"
                value={g}
                checked={gruposselecionados.includes(g)}
                onChange={() => alternarGrupo(g)}
                disabled={!estaeditando}
              />
              {g}
            </label>
          ))}
        </DadosContato>
        <div>
          <button onClick={() => setestaeditando(!estaeditando)}>Editar</button>
          <button>Remover</button>
        </div>
      </ContatoCard>
    </>
  )
}

export default Contato
