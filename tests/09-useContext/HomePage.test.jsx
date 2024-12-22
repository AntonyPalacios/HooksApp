import {render, screen} from "@testing-library/react";
import {HomePage} from "../../src/09-useContext/index.js";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Pruebas en HomePage', () => {

    const user = {
        id:1,
        name:'Antony'
    }
    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
        )
        // screen.debug()
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('debe mostrar el componenente con el usuario',()=>{
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe(JSON.stringify(user,null,3))
    })
})