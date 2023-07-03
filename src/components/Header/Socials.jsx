import {FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"

const Socials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mehedi-hasan-026372278/" target="__blank"><FaLinkedin/></a>
            <a href="https://github.com/evo264714" target="__blank"><FaGithub/></a>
            <a href="https://www.facebook.com/mehedihasan.evo/" target="__blank"><FaFacebook/></a>
        </div>
    );
};

export default Socials;