import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BotaoCancelarRemover,
  BotaoEditar,
  BotaoSalvar,
  Campo,
  ContatoCard,
  DadosContato,
  Gruposinput,
  Grupostexto
} from './style'
import * as enums from '../../utils/enum/contato'
import ContatoClass from '../../models/Contato'
import { remover, salvar } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome: nomeoriginal,
  tel: teloriginal,
  email: emailoriginal,
  grupos: gruposoriginal,
  id
}: Props) => {
  const [gruposselecionados, setgruposselecionados] = useState(gruposoriginal)
  const [estaeditando, setestaeditando] = useState(false)
  const [nomeT, setnomeT] = useState('')
  const [telT, settelT] = useState('')
  const [emailT, setemailT] = useState('')
  const dispatch = useDispatch()
  const alternarGrupo = (grupo: enums.grupos) => {
    if (gruposselecionados.includes(grupo)) {
      setgruposselecionados(gruposselecionados.filter((g) => g !== grupo))
    } else {
      setgruposselecionados([...gruposselecionados, grupo])
    }
  }
  useEffect(() => {
    if (nomeoriginal.length > 0) {
      setnomeT(nomeoriginal)
    }
  }, [nomeoriginal])
  useEffect(() => {
    if (teloriginal.length > 0) {
      settelT(teloriginal)
    }
  }, [teloriginal])
  useEffect(() => {
    if (emailoriginal.length > 0) {
      setemailT(emailoriginal)
    }
  }, [emailoriginal])

  function cancelarEdicao() {
    setestaeditando(false)
    setnomeT(nomeoriginal)
    settelT(teloriginal)
    setemailT(emailoriginal)
    setgruposselecionados(gruposoriginal)
  }
  return (
    <>
      <ContatoCard id={String(id)}>
        {estaeditando && <>Editando: </>}
        <Campo
          disabled={!estaeditando}
          onChange={(event) => setnomeT(event.target.value)}
          type="text"
          value={nomeT}
        />
        <DadosContato>
          <span>Telefone:</span>
          <Campo
            disabled={!estaeditando}
            onChange={(event) => settelT(event.target.value)}
            type="text"
            value={telT}
          />
        </DadosContato>
        <DadosContato>
          <span>Email:</span>
          <Campo
            disabled={!estaeditando}
            onChange={(event) => setemailT(event.target.value)}
            type="email"
            value={emailT}
          />
        </DadosContato>
        <DadosContato>
          <span>Grupos:</span>
          {estaeditando
            ? Object.values(enums.grupos).map((g) => (
                <Grupostexto key={g}>
                  <Gruposinput
                    type="checkbox"
                    value={g}
                    checked={gruposselecionados.includes(g)}
                    onChange={() => alternarGrupo(g)}
                    disabled={!estaeditando}
                  />
                  {g}
                </Grupostexto>
              ))
            : gruposselecionados.map((g) => (
                <Grupostexto key={g}>{g}</Grupostexto>
              ))}
        </DadosContato>
        <div>
          {estaeditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    salvar({
                      nome: nomeT,
                      tel: telT,
                      email: emailT,
                      grupos: gruposselecionados,
                      id
                    })
                  )
                  setestaeditando(false)
                }}
              >
                <span className="material-icons">save</span>
              </BotaoSalvar>
              <BotaoCancelarRemover onClick={cancelarEdicao}>
                <span className="material-icons">cancel</span>
              </BotaoCancelarRemover>
            </>
          ) : (
            <>
              <BotaoEditar onClick={() => setestaeditando(true)}>
                <span className="material-icons">edit</span>
              </BotaoEditar>
              <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                <span className="material-icons">delete</span>
              </BotaoCancelarRemover>
            </>
          )}
        </div>
      </ContatoCard>
    </>
  )
}

export default Contato
