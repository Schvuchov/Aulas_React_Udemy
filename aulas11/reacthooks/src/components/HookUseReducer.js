import React, { useReducer } from 'react'

const HookUseReducer = () => {
    //1- começando com o usereducer
    // parecido com o useState mas para situações mais complexas
    // dispatch é a função responsavel por alterar o state

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
        //transforma o state number num numero aleatorio
    })

    //2 useReducer com actions
    const initialTasks = [
        {id:1, text: "fazer alguma coisa"},
        {id:2, text: "fazer outra coisa"}
    ]

    const taskReducer = (state, action) => {

    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número!</button>
        <h3>Tarefas:</h3>
        {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer