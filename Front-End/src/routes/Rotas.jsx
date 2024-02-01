import { Route, Routes, useLocation } from "react-router-dom"
import HomeLogin from "../pages/HomeLogin1"
import Register from "../pages/Register2"
import Dash from "../pages/Dash3"

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
