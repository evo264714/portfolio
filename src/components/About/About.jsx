import './About.css'
import myself2 from '../../assets/myself2.jpg'
import { FaAward } from "react-icons/fa"
import { MdOutlineFolderShared } from "react-icons/md"

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={myself2} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>1 year of Experience</small>
                        </article>
                        <article className='about_card'>
                            <MdOutlineFolderShared className='about_icon' />
                            <h5>Projects</h5>
                            <small>Many Completed Projects</small>
                        </article>
                    </div>

                    <p>
                        Highly motivated and skilled Junior Web Developer with expertise in many skills. Seeking an internship opportunity to
                        further enhance my web development skills and gain practical experience in a dynamic and collaborative work
                        environment. Committed to delivering high-quality, user-friendly web solutions that meet client requirements and
                        contribute to the success of the organization. Strong problem-solving skills, a passion for learning, and the ability to
                        adapt quickly to new technologies.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;