import { Route, Routes, useLocation } from "react-router-dom"
import HomeLogin from "../pages/HomeLogin"
import Register from "../pages/Register"
import Dash from "../pages/Dashboard"

import {AnimatePresence} from 'framer-motion'

function Rotas() {
const location= useLocation()
    return (
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dash" element={<Dash />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}
export default Rotas
