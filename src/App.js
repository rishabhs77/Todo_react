
import {React,useState} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
 
function App() {
  const [inputTodo,setInputTodo] = useState("");
  const [myTodos,setMyTodos] = useState([]);

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Form inputTodo={inputTodo} setInputTodo={setInputTodo} myTodos={myTodos} setMyTodos={setMyTodos} />
      <Todolist myTodos={myTodos}/>
    </div>
  );
}
export default App;
