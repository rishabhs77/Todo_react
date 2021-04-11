import React from 'react';

const Todo = ({id,todo,myTodos,setMyTodos}) =>{
    
    const deleteHandler = () => {
        //create the array with filtering the one having same id
        setMyTodos(myTodos.filter( (e1) => e1.id !== todo.id));
    };

    const completeHandler = () => {
        //find index
        const index=myTodos.findIndex( (e1) => e1.id === todo.id);
        //copy state
        const newState=[...myTodos];
        //change the state
        newState[index]={...newState[index] , completed:!newState[index].completed};
        //console.log(index);
        setMyTodos(newState);
    };

    return(
        <div className = 'todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.content}
            </li>
            <button className = "complete-btn" onClick={completeHandler}>
            <i className="fas fa-check"></i>
            </button>
            <button className = "trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;