import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({todos, handleDeleteTodo}) => {
    return (
        <ul className="list-group">
            {todos.map(t => (
                <TodoItem key={t.id} todo={t} handleDeleteTodo={handleDeleteTodo}/>
            ))}
        </ul>
    );
};
