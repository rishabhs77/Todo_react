import React from 'react';
import Todo from "./Todo";


const Todolist = ({myTodos,setMyTodos,filterTodo}) =>{

    return(
        <div className = "todo-conatiner">
            { filterTodo.length===0 ? <div className = "check-todo">No Todos</div>:<div className = "check-todo">Total todos {filterTodo.length} </div>}
            <ul className = "todo-list">
            { filterTodo.map( (todo) => (
                <Todo key={todo.id} todo={todo} myTodos={myTodos} setMyTodos={setMyTodos} filter/>
            ))}
            </ul>
        </div>
    );

}
export default Todolist;