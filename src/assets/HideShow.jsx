import { useState } from "react"
import ToggleCompo from "./ToggleCompo"
function HideShow (){
    const [tdisplay,SettDisplay] =useState(true)
    return(
            <>
                <h2>Hide and show / Toggle</h2>
                <button onClick={()=>SettDisplay(!tdisplay)}>Hide/Show</button>
                {
                    tdisplay?<ToggleCompo/>:null
                }
                {/* {
                    tdisplay?<h2>Toggle Content</h2>:none
                } */}
            </>

    )
}

export default HideShow     