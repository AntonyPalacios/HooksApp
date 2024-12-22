import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user)
    return (
        <>
            <h1>Login Page</h1>
            <hr/>
            <pre aria-label='pre'>{JSON.stringify(user,null,3)}</pre>

            <button
                className="btn btn-primary"
                onClick={()=>setUser({name:'Antony',id:1, email:'apalaciosc0109@gmail.com'})}
            >
                Establecer usuario
            </button>
        </>
    );
};
