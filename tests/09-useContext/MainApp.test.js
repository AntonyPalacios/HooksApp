import {render, screen} from "@testing-library/react";
import {MainApp} from "../../src/09-useContext/MainApp.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en router de MainApp', () => {
    test('debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain('HomePage');

    })

    test('debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByText('Login Page')).toBeTruthy();

    })

    test('debe de mostrar el AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        )
        expect(screen.getByText('About Page')).toBeTruthy();

    })
})