
import {React,useState} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./App.css";
 
function App() {
  const [inputTodo,setInputTodo] = useState("");
  const [myTodos,setMyTodos] = useState([]);

  return (
    <div className="App">
      <header>My Todos</header>
      <Form inputTodo={inputTodo} setInputTodo={setInputTodo} myTodos={myTodos} setMyTodos={setMyTodos} />
      <Todolist myTodos={myTodos} setMyTodos={setMyTodos}/>
    </div>
  );
}
export default App;
