import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage, AboutPage, LoginPage, NavBar} from "./index.js";
import {UserProvider} from "./context/UserProvider.jsx";


export const MainApp = () => {
    return (
        <UserProvider>
            {/*<h1>Main App</h1>*/}
            <NavBar/>
            <hr/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>

                <Route path="/*" element={<Navigate to="/about"/>}/>
            </Routes>
        </UserProvider>
    );
};
