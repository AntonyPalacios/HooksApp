import {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallbackHook = () =>{

    const [counter, setCounter] = useState(10);

    const incrementCallback = useCallback((value) => {
        setCounter((c) => c + value);

    }, []);

    // useEffect(() => {
    //     incrementCallback();
    // }, [incrementCallback]);


    return(
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementCallback}/>
        </>
    )
}