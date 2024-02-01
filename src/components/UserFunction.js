import { useState } from 'react';

const User = (props)=>{
    const [count,setCount] = useState(0);

    return (<div>
        <h1>full name : {props.name}</h1>
        <h2>place : {props.place}</h2>
        <h3>Count from function : {count}</h3>
        <button onClick={
            ()=>{
                setCount(count+1)
            }
        }>Counter</button>
    </div>)
}
export default User