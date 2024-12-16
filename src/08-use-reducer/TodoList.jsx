import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({todos}) => {
    return (
        <ul className="list-group">
            {todos.map(t => (
                <TodoItem key={t.id} todo={t}/>
            ))}
        </ul>
    );
};
