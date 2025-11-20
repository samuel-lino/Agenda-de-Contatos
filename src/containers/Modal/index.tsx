import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enum/contato'
import {
  Botaoadicionar,
  BotaoCancelar,
  Botoes,
  Campos,
  Formulario,
  GruposLista,
  Modal,
  Modalprincipal
} from './style'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatos'

type Props = {
  aberto: boolean
  onClose: () => void
}

const ModalNovoContato = ({ onClose, aberto }: Props) => {
  const [nome, setnome] = useState('')
  const [tel, settel] = useState('')
  const [email, setemail] = useState('')
  const [grupos, setgrupos] = useState<enums.grupos[]>([])

  const dispatch = useDispatch()

  const alternarGrupo = (grupo: enums.grupos) => {
    if (grupos.includes(grupo)) {
      setgrupos(grupos.filter((g) => g !== grupo))
    } else {
      setgrupos([...grupos, grupo])
    }
  }

  const cadastrar = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      adicionar({
        nome,
        email,
        tel,
        grupos
      })
    )
    onClose()
  }

  if (!aberto) return null
  else
    return (
      <Modalprincipal>
        <Modal>
          <h2>Novo Contato</h2>
          <Formulario>
            <Campos
              type="text"
              onChange={(e) => setnome(e.target.value)}
              placeholder="Nome"
            />
            <Campos
              type="tel"
              onChange={(e) => settel(e.target.value)}
              placeholder="Telefone"
            />
            <Campos
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
            <GruposLista>
              {Object.values(enums.grupos).map((g) => (
                <label key={g}>
                  <input
                    type="checkbox"
                    checked={grupos.includes(g)}
                    onChange={() => alternarGrupo(g)}
                  />
                  {g}
                </label>
              ))}
            </GruposLista>
            <Botoes>
              <Botaoadicionar onClick={cadastrar}>
                <span className="material-icons">check</span>
              </Botaoadicionar>
              <BotaoCancelar onClick={onClose}>
                <span className="material-icons">close</span>
              </BotaoCancelar>
            </Botoes>
          </Formulario>
        </Modal>
      </Modalprincipal>
    )
}

export default ModalNovoContato
