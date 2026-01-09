import { useState } from "react";
const Counter = () =>{
 const [count, Setcount] = useState(2)
    return(
        <div>
            <h2>counter Value in Sum:{count}</h2>
            <button onClick={()=>Setcount(count + 2)}>Increase Count</button>
        </div>
    )
}
export default Counter