import {useEffect, useState} from 'react'

const HookUseEffect = () => {
    // 1 useEffect sem dependencias vai ser executado sempre que o componente (HookUseEffect) for renderizado
    useEffect(() => {
        console.log('estou sendo executado');
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }


    // 2 useEffect com array de dependencias vazio irá ser executado apenas uma vez quando recarrega a pag
    useEffect(() => {
        console.log("serei executado apenas uma vez");
    }, []);


    // 3 useEffect com dependencias sera executado sempre que tiver uma mudança nos elementos que estao nas dependencias
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("sou executado apenas quando anotherNumber mudar")
        }
    }, [anotherNumber])

    // 4 cleanup do useEffect
    useEffect(() => {
        //const timer = setTimeout(() => {
        //    console.log("hello world")
        //    setAnotherNumber(anotherNumber + 1)
        //}, 2000)

        //return () => clearTimeout(timer) 
        //quando tu muda de pag, react entende que tu não quer mais usar esse hook e não executa a funcao
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect