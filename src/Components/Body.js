import React, { useState } from 'react';

const Body = () => {
    coust [count,setCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Like</button>
            <p>Like:{count}</p>
        </div>
    )
}
export default Body
