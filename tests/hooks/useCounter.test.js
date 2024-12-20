import {useCounter} from "../../src/hooks/index.js";
import {act, renderHook} from "@testing-library/react";

describe('Pruebas en useCounter()', () => {
    const initialValue = 100;

    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter,increment,decrement,reset} = result.current

        expect(counter).toEqual(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test('debe de retornar el counter con el valor de 100', () => {

        const {result} = renderHook(() => useCounter(initialValue));
        const {counter} = result.current

        expect(counter).toEqual(initialValue);
    })

    test('la funcion increment debe de incrementar el valor en 1',()=>{
        const {result} = renderHook(() => useCounter(initialValue));
        const {increment} = result.current
        act(()=>{
            increment();
        })
        expect(result.current.counter).toEqual(initialValue +1);
    })

    test('la funcion decrement debe de disminuir el valor en 1',()=>{
        const {result} = renderHook(() => useCounter(initialValue));
        const {decrement} = result.current
        act(()=>{
            decrement();
        })
        expect(result.current.counter).toEqual(initialValue - 1);
    })

    test('la funcion reset debe de setear el valor al inicial',()=>{
        const {result} = renderHook(() => useCounter(initialValue));
        const {reset,increment, decrement} = result.current
        act(()=>{
            increment(50);
        })
        expect(result.current.counter).toEqual(initialValue + 50);
        act(()=>{
            decrement(20);
        })
        expect(result.current.counter).toEqual(initialValue - 20);

        act(()=>{
            reset()
        })
        expect(result.current.counter).toEqual(initialValue);
    })
})