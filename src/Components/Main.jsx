import { useState } from "react"

export default function Main () {

  const [telefone, setTelefone] = useState("")

  return (
    <form>
      <label>
        <input
          type="text"
          name=""
          id=""
          onChange={(event)=> setTelefone(event.target.value)}
        />
      </label>
      <label>
        <input
          type="tel"
          name=""
          id=""
          onChange={(event)=> setTelefone(event.target.value)}
        />
      </label>
      <button>Cadastrar</button>
    </form>
  )
}
