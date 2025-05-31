import React, {useState} from "react";

function Counter(){

    const[count,setCount]= useState(0);

    return(
        <>
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count -1)}>Decrement</button>
        </div>
        </>
    );

}

export default Counter;