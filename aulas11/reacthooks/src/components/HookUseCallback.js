import { useCallback, useState} from 'react'

import List from './List'

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)

    //callback vai "gravar" a resposta da função pra não ter que re executa-la até que seja necessario e tenha mudança
    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c"]
    }, [])

  return (
    <div>
        <h2>HookUseCallback</h2>
        <List getItems={getItemsFromDatabase} />
        <button onClick={() => setCounter(counter + 1)}>Alterar</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback