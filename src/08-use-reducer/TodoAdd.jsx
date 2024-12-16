import {useForm} from "../hooks/useForm.js";

export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description:''
    })

    const onFormSubmit = (event) =>{
        event.preventDefault();

        if(description.trim().length === 0) return


        const newTodo = {
            id: new Date().getTime(),
            description,
            done:false
        }
        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value={description}
                name="description"
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    );
};
