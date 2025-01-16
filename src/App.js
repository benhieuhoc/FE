import { Route, Routes } from "react-router";
import HomePage from "./page/Homepage";
import Page404 from "./page/404page";


const App = () =>{

    const Routerconfig = [
        {path: "/", element: <HomePage/>},
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
