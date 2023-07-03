import { useState } from 'react';
import './Nav.css'
import {FaHome, FaUserAlt, FaBook} from "react-icons/fa"
import {RiServiceFill,RiMessage3Line} from "react-icons/ri"


const Nav = () => {
    const [activeNav, setActiveNav] = useState('')
    return (
        <nav>
            <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
            <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
            <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
            <a href="#services" onClick={() =>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
            <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Line/></a>
        </nav>
    );
};

export default Nav;