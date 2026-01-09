function UserList (){
    let path="https://picsum.photos/200/300"
    function callfun(){
        alert("Function called")
    }
    function fruit (name){
        alert(name)
    }
    return(
        <div>
            <h1>Munish Chouhan</h1>
            <img src={path} alt="picsum" className="User_image"/>
            <ul>
                <li>It is a long established fact that a reader will be</li>
                <li>It is a long established fact that a reader will be</li>
                <li>It is a long established fact that a reader will be</li>
            </ul>
            <button onClick={callfun}>Click Me</button>
            <button onClick={()=>fruit ("Apple")}>Apple</button>
            <button onClick={()=>fruit ("Bannana")} >Bannana</button>
        </div>
    )
}

export default UserList