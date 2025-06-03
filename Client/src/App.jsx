import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { Error404 } from "./pages/Error404"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
            </Route>
            <Route path="*" Component={Error404} />
        </Routes>
    </BrowserRouter>
}