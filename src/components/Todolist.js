import React from 'react';
import Todo from "./Todo";


const Todolist = ({myTodos}) =>{

    return(
        <div className = "todo-conatiner">
            <ul className = "todo-list">
            { myTodos.map( (todo) => (
                <Todo content={todo.content} id={todo.id}/>
            ))}
            </ul>
        </div>
    );

}
export default Todolist;