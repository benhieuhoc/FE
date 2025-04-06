import { Route, Routes } from "react-router";
import HomePage from "./page/Homepage";
import Page404 from "./page/404page";
import Home from "./page/Home";
import Introduce from "./page/Introduce/Introduce";
// test
import Lo_gin from "./page/test/login";
import Re_gister from "./page/test/register";
import Ho_me from "./page/test/home";
import All_project from "./page/test/all_project";
import All_task from "./page/test/all_task";

const App = () =>{

    const Routerconfig = [
        // dùng tạm
        {path: "/", element: <Introduce/>},
        {path: "/register", element: <Re_gister/>},
        {path: "/all_project", element: <All_project/>},
        {path: "/all_task", element: <All_task/>},
        {path: "/login", element: <Lo_gin/>},
        {path: "/register", element: <Re_gister/>},


        // giao diện chính
        {path: "/home", element: <Home/>},
        {path: "/ho-me", element: <HomePage/>},
        {path: "*", element: <Page404/>},
    ]

    return (
        <>
            <Routes>
                {Routerconfig.map((router, index) => (
                    <Route key={index} path={router.path} element={router.element} />
                ))}
            </Routes>
        </>
    )
}

export default App;
