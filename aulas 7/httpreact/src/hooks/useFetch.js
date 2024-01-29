import { useState, useEffect } from "react";


//4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //5 - refatorando POST
    const [config, setConfig] = useState(null)   //config metodo, cabeçalho
    const [method, setMethod] = useState(null)   // qual método GET/POST
    const [callFetch, setCallFetch] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url) //req da url
            const json = await res.json() //recebe dados
            setData(json)
        }
        fetchData()

    }, [url, callFetch])

    //5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === "POST") {
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        }

        httpRequest()
        
    }, [config])

    return { data }

}