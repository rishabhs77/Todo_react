import React from 'react';
import Todo from "./Todo";


const Todolist = ({myTodos,setMyTodos}) =>{

    return(
        <div className = "todo-conatiner">
            { myTodos.length===0 ? <div className = "check-todo">No Todos</div>:<div className = "check-todo">Total todos {myTodos.length} </div>}
            <ul className = "todo-list">
            { myTodos.map( (todo) => (
                <Todo key={todo.id} todo={todo} myTodos={myTodos} setMyTodos={setMyTodos}/>
            ))}
            </ul>
        </div>
    );

}
export default Todolist;