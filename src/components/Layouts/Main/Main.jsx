import Contact from "../../Contact/Contact";
import Experience from "../../Experience/Experience";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Nav from "../../Nav/Nav";
import Services from "../../Services/Services";
import About from './../../About/About';
import Portfolio from './../../Portfolio/Portfolio';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;