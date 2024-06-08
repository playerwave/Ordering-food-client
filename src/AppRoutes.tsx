import { Navigate, Routes, Route } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <span>Home page</span> }/>
            <Route path="/user-profile" element={ <span>User Profile Page</span> }/>
            <Route path="*" element={ <Navigate to="/" /> }/>
        </Routes>
    )
}

export default AppRoutes;