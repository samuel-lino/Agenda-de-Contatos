import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enum/contato'
import { Formulario, Modal, Modalprincipal } from './style'
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
            <input
              type="text"
              onChange={(e) => setnome(e.target.value)}
              placeholder="Nome"
            />
            <input
              type="tel"
              onChange={(e) => settel(e.target.value)}
              placeholder="Telefone"
            />
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="E-mail"
            />
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
            <button onClick={onClose}>
              <span className="material-icons">close</span>
            </button>
            <button onClick={cadastrar}>
              <span className="material-icons">check</span>
            </button>
          </Formulario>
        </Modal>
      </Modalprincipal>
    )
}

export default ModalNovoContato
