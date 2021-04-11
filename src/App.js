
import {React,useState,useEffect} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./App.css";
 
function App() {
  const [inputTodo,setInputTodo] = useState("");
  const [myTodos,setMyTodos] = useState([]);
  const [filter,setFilter] = useState("All");
  const [filterTodo,setFilterTodo]=useState([]);

  const filterTodos = () => {
    switch(filter){
      case 'Completed':
        setFilterTodo(myTodos.filter( (e1) => e1.completed === true));
        break;
      
      case 'Pending':
        setFilterTodo(myTodos.filter( (e1) => e1.completed === false));
        break;
      
      default:
        setFilterTodo(myTodos);
        break;
    }
    
  };
  
  //FilterTodos should be calles when mytodos state change or when filter steta changes
  useEffect( ()=>{
    filterTodos();
  },[myTodos,filter]);

  return (
    <div className="App">
      <header>My Todos</header>
      <Form inputTodo={inputTodo} setInputTodo={setInputTodo} myTodos={myTodos} setMyTodos={setMyTodos} setFilter={setFilter} />
      <Todolist myTodos={myTodos} setMyTodos={setMyTodos} filterTodo= {filterTodo}/>
    </div>
  );
}
export default App;
