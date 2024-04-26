import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    //const premiumNumber = ["0", "100", "200"]

//UseEffect vai executar cada vez que premiumNumber for 'utilizado' (não necessariamente alterado)
//UseMemo vai guardar esse valor para que o useEffect não re-renderize o componente
//isso evita ficar recarregando o array. imagine um array mto mto grande sendo executado a cada renderização D:

    const premiumNumber = useMemo(() => {
        return ["0", "100", "200"]
    }, [])

    useEffect(() => {
        console.log("premium number foi alterado")
    }, [premiumNumber])  
    

  return (
    <div>
        <h2>HookUseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumber.includes(number) ? <p>Acertou o número</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo