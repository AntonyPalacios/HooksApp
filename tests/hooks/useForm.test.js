import {useForm} from "../../src/hooks/useForm.js";
import {act, renderHook} from "@testing-library/react";

describe('Pruebas en useForm' ,()=>{
    const initialForm = {
        name:'Antony',
        email:'test@test.com',
    }
    test('debe de regresar los valores por defecto',()=>{

        const {result} = renderHook(()=> useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });

    })

    test('debe de cambiar el nombre del formulario',()=>{
        const {result} = renderHook(()=> useForm(initialForm));
        const {onInputChange} = result.current;
        act(()=>{
            onInputChange({
                target:{
                    name:'name',
                    value: 'Silvia'
                }
            });
        })
        expect(result.current.formState.name).toBe("Silvia")
        expect(result.current.name).toBe("Silvia")
    })

    test('debe de realizar el reset del Formulario',()=>{
        const {result} = renderHook(()=> useForm(initialForm));
        const {onInputChange,onResetForm} = result.current;
        act(()=>{
            onInputChange({
                target:{
                    name:'name',
                    value: 'Silvia'
                }
            });
        })
        expect(result.current.formState.name).toBe("Silvia")
        expect(result.current.name).toBe("Silvia")

        act(()=>{
            onResetForm()
        })
        expect(result.current.formState.name).toBe(initialForm.name)
        expect(result.current.name).toBe(initialForm.name)
    })
})
