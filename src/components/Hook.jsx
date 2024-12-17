import React, {useState} from 'react'
import {useState} from 'react';

function State3(){
    const[total, setTotal] = useState(0);
    const[double, setDouble] = useState(0);
    useEffect(()=> {
        setDouble(total*2)
    })
    return(
        <div>
            <button onClick={() => {setTotal(total+1)}}INC></button>
            <button onClick={() => {setTotal(total-1)}}>DEC</button>
            <h2>{total}</h2>
            <h2>{double}</h2>
        </div>
    )
}