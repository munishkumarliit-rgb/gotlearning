import UserDemo from "./assets/DemoUser"
import Header from "./Header"
import UserList from "./Usercompo"
import StudyState from "./assets/StudyState"
import Counter from "./assets/Counter"
import HideShow from "./assets/HideShow"
import Form from "./assets/Form"
function App() {

  return (
    <div>
    <Header/>  
      <h1>Hello React + Vite</h1>
      <UserDemo/>
      <UserList/>
      <StudyState/>
      <Counter/>
      <HideShow/> 
       <Form/>
    </div>
  )
}


export default App
