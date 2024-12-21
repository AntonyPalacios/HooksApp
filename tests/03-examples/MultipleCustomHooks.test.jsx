import {render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples/MultipleCustomHooks.jsx";
import {useFetch} from "../../src/hooks/useFetch.js";

jest.mock("../../src/hooks/useFetch.js");

describe('Prruebas en <MultipleCustomHooks>', () => {
    test('debe mostrar el componente correctamente',()=>{
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError: null,
        });

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Cargando'))
        expect(screen.getByText('Información de Pokemón'))

    })

    test('debe de mostrar un pokemon',()=>{

        //mock de fetch
        useFetch.mockReturnValue({
            data:[{'name':'Pikachu'}],
            isLoading:true,
            hasError: null,
        });
        render(<MultipleCustomHooks />)
    })
})