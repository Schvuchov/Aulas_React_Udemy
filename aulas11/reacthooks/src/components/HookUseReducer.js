import React, { useReducer, useState } from 'react'

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
        switch(action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskText("")

                //...state pra trazer todos os que ja tem mais a nova
                return [...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchTasks({ type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número!</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer