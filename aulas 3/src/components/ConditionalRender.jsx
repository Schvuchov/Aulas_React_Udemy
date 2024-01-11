import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("lulis")

  return (
    <div>
        <h3>Condicional simples</h3>
        <h4>True or false?</h4>
        {x && <p>X é true</p>}
        {!x && <p>X é false</p>}

        <h3>IF ternário</h3>
        <h4>O nome definido no state é Babs?</h4>
        {name === "babs" ? (
            <div><p>O nome escolhido é Babs</p></div>
        ) : (
            <div><p>O nome está errado</p></div>
        )}

        <button onClick={()=> setName("babs")}> Defina o nome pra Babs</button>
    </div>
  )
}

export default ConditionalRender