import { useState } from "react"

export default function Main () {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState(0)
  const [cpf, setCpf] = useState(0)
  const [listaTelefone, setListaTelefone] = useState([])

  const registrar = (event) => {
    event.preventDefault()
    setListaTelefone([...listaTelefone, {
      nomeSalvo: nome,
      telefoneSalvo: telefone,
      cpfSalvo: cpf
    }])
  }

  const remover = (index) => {
    let novaLista = listaTelefone.filter((el, indice) => (index != indice))
    setListaTelefone(novaLista)
  }

  return (
    <main>
      <form action="" onSubmit={registrar}>
        <label htmlFor="nome">
          <input
            type="text"
            name="telefone-lista"
            id="nome"
            onChange={(event)=> setNome(event.target.value)}
          />
        </label>
        <label htmlFor="telefone">
          <input
            type="tel"
            name="telefone-lista"
            id="telefone"
            onChange={(event)=> setTelefone(event.target.value)}
          />
        </label>
        <label htmlFor="cpf">
          <input
            type="number"
            name="telefone-lista"
            id="cpf"
            onChange={(event)=> setCpf(event.target.value)}
          />
        </label>
        <button>Cadastrar</button>
      </form>
      {listaTelefone.map((contato, index) => 
      <div key={index} className="listaContatos">
        <p>{contato.nomeSalvo}</p>
        <p>{contato.telefoneSalvo}</p>
        <p>{contato.cpfSalvo}</p>
        <button onClick={function () {
          remover(index)
        }
      }></button>
      </div>)}
    </main>
  )
}
