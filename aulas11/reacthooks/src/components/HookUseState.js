import React from 'react'

import { useState } from 'react'

const HookUseState = () => {
    // 1 - use State
    let userName = 'João'
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = 'João Souza'
        setName("Matheus bat")
    }

    //2 - useState e Input
    const [age, setAge] = useState(18)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(age)
    }

  return (
    <div>
        {/*1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nome</button>

        {/*2 - useState e input*/}
        <p>Digite a idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="enviar"/>
        </form>
        <p>Você tem {age} anos</p>

        <hr />
    </div>
  )
}

export default HookUseState