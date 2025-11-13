import * as enums from '../utils/enum/contato'

class Contato {
  id: number
  nome: string
  tel: string
  email: string
  grupos: enums.grupos[]

  constructor(
    id: number,
    nome: string,
    tel: string,
    email: string,
    grupos: enums.grupos[]
  ) {
    this.id = id
    this.nome = nome
    this.tel = tel
    this.email = email
    this.grupos = grupos
  }
}

export default Contato
