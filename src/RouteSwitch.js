import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import { ErrorPage } from "./ErrorPage"
import { Profile } from "./Profile"

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="profile" exact element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}


export {RouteSwitch}