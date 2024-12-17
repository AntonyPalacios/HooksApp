import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

const user = {
    name: "Antony",
    id:1,
    age:27
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
