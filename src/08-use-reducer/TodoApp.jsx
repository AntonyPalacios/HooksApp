import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Aprender React',
    //     done: false
    // }
]
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const handleNewTodo = (todo) =>{
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) =>{
        const action = {
            type:'[TODO] Delete Todo',
            payload:id
        }
        dispatch(action)

    }
    const handleToggleTodo = (id) =>{
        const action = {
            type:'[TODO] Toggle Todo',
            payload:id
        }
        dispatch(action)
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>


        </>
    );
};
