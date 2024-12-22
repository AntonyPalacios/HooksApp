import {render, screen} from "@testing-library/react";
import {TodoApp} from "../../src/08-use-reducer/TodoApp.jsx";
import {useTodo} from "../../src/hooks/useTodo.js";

jest.mock('../../src/hooks/useTodo')

describe('Pruebas en TodoApp', () => {

    useTodo.mockReturnValue({
        todos:[
            {
                id: 1,
                description: "description 1",
                done: false
            },{
                id: 2,
                description: "description 2",
                done: false
            }
        ],
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    })

    test('debe de mostrar el componente correctamente',()=>{
        render(<TodoApp/>)
        // screen.debug()

        expect(screen.getByText('description 1')).toBeTruthy()
        expect(screen.getByText('description 2')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()
    })
});