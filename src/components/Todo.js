import React from 'react';

const Todo = ({id,todo,myTodos,setMyTodos}) =>{
    
    const deleteHandler = () => {
        setMyTodos(myTodos.filter( (e1) => e1.id !== todo.id));
    };

    return(
        <div className = 'todo'>
            <li className="todo-item">
                {todo.content}
            </li>
            <button className = "complete-btn">
            <i className="fas fa-check"></i>
            </button>
            <button className = "trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;