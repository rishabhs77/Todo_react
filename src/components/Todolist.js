import React from 'react';
import Todo from "./Todo";


const Todolist = ({myTodos,setMyTodos}) =>{

    return(
        <div className = "todo-conatiner">
            <ul className = "todo-list">
            { myTodos.map( (todo) => (
                <Todo key={todo.id} todo={todo} myTodos={myTodos} setMyTodos={setMyTodos}/>
            ))}
            </ul>
        </div>
    );

}
export default Todolist;