import React from 'react'
import Navbar from '../Common/Navbar'
import Middleware from "./Middlewarehome/Middleware"
import "../styles/Homescreen.css"
import Tophostel from './Topviewedhostels/Tophostel'
function Homescreen() {
    return (
        <>
        <Navbar />
        <Middleware />
        <Tophostel />
        </>
    )
}

export default Homescreen
