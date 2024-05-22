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

  const remover = (index) => { // Cria a funcao remover e coloca nela um parametro, que poderia ser qualquer coisa, esssa funcao recebera um numero (um indice)
    let novaLista = listaTelefone.filter((el, indice) => (index != indice)) // Cria uma nova lista usando o filter removendo o elemento do indice passado no parametro, usamos dois parametros no filter, pq o primeiro e o elemento e o segundo o indice
    setListaTelefone(novaLista) // Setamos a nova lista, caso nao fizessemos isso, apenas iria remover o elemento mas nao apresentar ele removido
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
      {listaTelefone.map((contato, index) => //Primeiro parametro o elemento o segundo o indice
      <div key={index} className="listaContatos"> 
        <p>{contato.nomeSalvo}</p>
        <p>{contato.telefoneSalvo}</p>
        <p>{contato.cpfSalvo}</p>
        <button onClick={function () {
          remover(index) // Crio um botao com uma funcao fantasma, que chama minha funcao com o parametro indice, esse botao e o que aparece como remover, precisa da funcao fantasma para passar um parametro
        }
      }>Remover</button>
      </div>)}
    </main>
  )
}
