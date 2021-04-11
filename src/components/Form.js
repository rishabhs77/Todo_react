import {React} from 'react';

const Form = ({inputTodo, setInputTodo, myTodos, setMyTodos ,setFilter}) => {

    const inputHandler = (e) =>{
        setInputTodo(e.target.value);
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        let input=inputTodo.trim();
        //console.log(input);
        if (input.length!=0){
        let new_todo={id : Math.random()*1000,
            content : inputTodo,
            completed : false,
        }
        setMyTodos([...myTodos , new_todo]);
        setInputTodo("");
    }
    };

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    return(
        <div>
            <form>
            <input type='text' onChange={inputHandler} value={inputTodo} className="todo-input"/>
            <button className="todo-button" onClick={submitHandler} type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={filterHandler}>
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