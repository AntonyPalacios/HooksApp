export const TodoItem = ({todo, handleDeleteTodo, onToggleTodo}) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span
                className={`${(todo.done)? 'text-decoration-line-through':''}`}
                onClick={() => onToggleTodo(todo.id)}
            > {todo.description}
            </span>
            <button
                className="btn btn-danger float-end"
                onClick={() => handleDeleteTodo(todo.id)}
            >Borrar
            </button>
        </li>
    );
};
