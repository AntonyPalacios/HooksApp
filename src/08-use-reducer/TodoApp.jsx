import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodo} from "../hooks/useTodo.js";


export const TodoApp = () => {

    const {todos,handleDeleteTodo,handleNewTodo,handleToggleTodo} = useTodo()

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
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
