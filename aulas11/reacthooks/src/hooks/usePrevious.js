import { useEffect, useRef, useDebugValue} from 'react'

//salva o estado antigo de um valor
export const usePrevious = (value) => {
    const ref = useRef

    //debugvalue hook
    useDebugValue("----CUSTOM HOOK E USEDUBUGVALUE")
    useDebugValue("o numero anterior é " + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}

