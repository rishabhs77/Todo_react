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
  

  useEffect( () => {
    getLocalStorage();
  },[]);
  //FilterTodos should be called when mytodos state change or when filter state changes
  useEffect( ()=>{
    filterTodos();
    saveLocalStorage();
  },[myTodos,filter]);

  
  
  //Save to browsers local storage
  const saveLocalStorage = () => {
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
  };

  //get Items from local storage

  const getLocalStorage = () => {
    //setMyTodos(items);
    if (localStorage.getItem("myTodos") === null){
      localStorage.setItem('myTodos', JSON.stringify([]));
    }
    else{  
      let items= JSON.parse(localStorage.getItem('myTodos'));
      console.log(items);
      setMyTodos(items);
    }
  };


  return (
    <div className="App">
      <header>My Todos</header>
      <Form inputTodo={inputTodo} setInputTodo={setInputTodo} myTodos={myTodos} setMyTodos={setMyTodos} setFilter={setFilter} />
      <Todolist myTodos={myTodos} setMyTodos={setMyTodos} filterTodo= {filterTodo}/>
    </div>
  );
}
export default App;
