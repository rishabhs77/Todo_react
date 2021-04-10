import {React,useState} from 'react';

const Form = ({inputTodo, setInputTodo, myTodos, setMyTodos}) => {

    const inputHandler = (e) =>{
        setInputTodo(e.target.value);
    };

    const submitHandler = (e) =>{
        e.preventDefault();

        let new_todo={id : Math.random()*1000,
            content : inputTodo,
            completed : false,
        }
        setMyTodos([...myTodos , new_todo]);
        setInputTodo("");
    };

    return(
        <div>
            <form>
            <input type='text' onChange={inputHandler} value={inputTodo} className="todo-input"/>
            <button className="todo-button" onClick={submitHandler} type="submit">
            </button>
            <div className="select">
                <select name="todos" className="filter-todos">
                    <option value="All">
                        All
                    </option>
                    <option value="Completed">
                        Completed
                    </option>
                    <option value="Pending">
                        Pending
                    </option>
                </select>
            </div>
            </form>
        </div>
    );
}
export default Form;