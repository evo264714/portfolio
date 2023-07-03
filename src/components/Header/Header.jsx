import './Header.css'
import Resume from './Resume';
import myself from '../../assets/myself.png'
import Socials from './Socials';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Mehedi Hasan</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <Resume></Resume>
                <Socials></Socials>

                <div className="myself">
                    <img src={myself} alt="" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;