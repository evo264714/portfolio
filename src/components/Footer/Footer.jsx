import './Footer.css'
import {FaLinkedin, FaFacebook, FaInstagram} from "react-icons/fa"


const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Mehedi Hasan</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer_socials'>
                <a href="https://www.facebook.com/mehedihasan.evo/"><FaFacebook/></a>
                <a href="https://www.instagram.com/real_evowo/"><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/mehedi-hasan-026372278/"><FaLinkedin/></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; Mehedi's Portfolio. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;