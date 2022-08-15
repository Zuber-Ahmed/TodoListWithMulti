import {BrowserRouter,Routes,Route} from "react-router-dom"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Animalpic} from './component/Animalpic'
import {Animal} from './component/Animal'
import {Table} from "./component/Table"
import {Todo} from "./component/Todo"
import {Api} from "./component/Api"
import "./component/comon.css"
import { Navbar } from "./component/Navbar"
import { Home } from "./component/Home"
import { Task } from "./component/Task"
import { Task1 } from "./component/Task1"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>

      <Route path="Animalpic" element={<Animalpic/>} />
      <Route path="Animals" element={<Animal/>} />
     <Route path="Table" element= {<Table />} />
     <Route path="Todo" element={<Todo/>} />
     <Route path="Api" element= {<Api/>} />
     <Route path="Home" element={<Home/>} />
     <Route path="Task" element={<Task/>} />
     <Route path="Task1" element={<Task1/>} />
     </Routes>
     </BrowserRouter>

      
      
     
    </div>
  );
}

export default App;
