import {fireEvent, render, screen} from "@testing-library/react";
import {TodoItem} from "../../src/08-use-reducer/TodoItem.jsx";

describe('Pruebas en TodoItem',()=>{

    const todo={
        id:1,
        description:'Aprender react',
        done:false
    }

    const handleDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('debe de mostrar el Todo pendiente de completar',()=>{

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                handleDeleteTodo={handleDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })

    test('debe de mostrar el Todo completado',()=>{

        todo.done=true

        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                handleDeleteTodo={handleDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('span debe de llamar el ToggleTodo onClick',()=>{
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                handleDeleteTodo={handleDeleteTodoMock}
            />
        )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalled()
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('boton debe de llamar el DeleteTodo onClick',()=>{
        render(
            <TodoItem
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                handleDeleteTodo={handleDeleteTodoMock}
            />
        )
        const btn = screen.getByRole('button')
        fireEvent.click(btn)

        expect(handleDeleteTodoMock).toHaveBeenCalled()
        expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})