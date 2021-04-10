import React from 'react';

const Todo = ({content,id}) =>{
    

    return(
        <div className = 'todo'>
            <li className="todo-item">
                {content}
            </li>
            <button className = "complete-btn">

            </button>
            <button className = "trash-btn">

            </button>
            
        </div>
    );
}

export default Todo;