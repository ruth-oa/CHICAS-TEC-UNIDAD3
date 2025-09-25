import { useState } from "react"

export function Contador(){
    let [contador, setContador]=useState(0)
    return(
        <div>
            
            <button  onClick={() => setContador(contador+1)} >Incrementar: +1</button>
            <button onClick={() => setContador(contador-1)} >Reducir: -1</button>
            <p>Contador: {contador} </p>

        </div>
    )
}
