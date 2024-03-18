import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({stock,onAdd,initial=1}) =>{
    const [count,setCount] = useState(initial)

    const sumar =  () =>{
         if(count < stock){
             setCount(count+1)
         }else{
             alert("cantidad maxima")
         }       
    }

    const restar = () =>{
        count > 1 && setCount(count -1)
    }


    return (
        <Counter count={count} sumar={sumar} restar={restar} onAdd={onAdd} />
    )
}

export default CounterContainer