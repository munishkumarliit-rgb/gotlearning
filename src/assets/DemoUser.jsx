function UserDemo (){
    const object={
        name :"Munish Chouhan",
        email :"demo@email.com",
        age:"29"
    }
    const array=['Munish', 'Rishu', 'Dishu']
    return(
        <div>
        <h1>{object.age}</h1>
        <h2>{array[2]}</h2>
        </div>
    )
}
export default UserDemo