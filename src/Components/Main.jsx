import { useState } from "react"

export default function Main () {

  const [nome, setNome] = useState("")

  return (
    <div>
      <p> Nome:
      <input
        type="text"
        name=""
        id=""
        onChange={(event)=> setNome(event.target.value)}
      />
      {nome}
      </p>
    </div>
  )
}
