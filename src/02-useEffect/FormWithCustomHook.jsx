import {useForm} from "../hooks/useForm.js";

export const FormWithCustomHook = ()=>{

    const {username,email,password, onInputChange, onResetForm} = useForm({
        username: "",
        email:"",
        password:""
    })

    // const {username,email, password} = formState;

    return(
        <>
            <h1>Formulario con Custom Hook</h1>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}