export const TodoItem = ({todo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span> {todo.description}</span>
            <button className="btn btn-danger float-end">Borrar</button>
        </li>
    );
};
