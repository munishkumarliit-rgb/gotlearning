import { useState } from "react";
function StudyState(){
    const [Fal, newFal] =useState("Seb");
    const HaldleFAL=()=>{
        newFal("kela")
    }
    return(
        <div>
            <h1>State in react</h1>
            <h2>{Fal}</h2>
            <button onClick={HaldleFAL}>Change Fal click pr</button>
        </div>
    )

}
export default StudyState