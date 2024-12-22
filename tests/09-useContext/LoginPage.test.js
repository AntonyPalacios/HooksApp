import {fireEvent, render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";
import {LoginPage} from "../../src/09-useContext/index.js";

describe('Pruebas en Login Page', () => {
    test('debe de mostrar el componete sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de llamar setUser cuando se hace click en el boton', () => {
        const setUserMock = jest.fn()
        render(
            <UserContext.Provider value={{user:null, setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const setUserBtn = screen.getByRole('button')
        fireEvent.click(setUserBtn)
        expect(setUserMock).toBeCalledTimes(1)
        expect(setUserMock).toBeCalledWith({
            name: expect.any(String),
            id: expect.any(Number),
            email: expect.any(String),
        })
    })
})