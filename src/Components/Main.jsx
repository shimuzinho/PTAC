import { useState } from "react"

export default function Main () {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState(0)
  const [cpf, setCpf] = useState(0)
  const [listaContatos, setListaContatos] = useState([])

  const registrar = (event) => {
    event.preventDefault()
    setListaContatos([...listaContatos, {
      nomeSalvo: nome,
      telefoneSalvo: telefone,
      cpfSalvo: cpf,
    }])
  }

  return (
    <form action="" onSubmit={registrar}>
      <label htmlFor="nome">
        <input
          type="text"
          name="lista-telefone"
          id="nome"
          onChange={(event)=> setNome(event.target.value)}
        />
      </label>
      <label htmlFor="telefone">
        <input
          type="tel"
          name="lista-telefone"
          id="telefone"
          onChange={(event)=> setTelefone(event.target.value)}
        />
      </label>
      <label htmlFor="cpf">
        <input
          type="number"
          name="lista-telefone"
          id="cpf"
          onChange={(event)=> setCpf(event.target.value)}
        />
      </label>
      <button>Cadastrar</button>
    </form>
  )
}
