import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What Do I Offer</h5>
            <h2>Services</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service_list'>
                        <li><BsCheck className='service_list-icon'/>I am very passionate about UI design</li>
                        <li><BsCheck className='service_list-icon'/>I can possibly take my career toward this and learn more about it</li>
                        <li><BsCheck className='service_list-icon'/>I have designed many unique projects on my own</li>
                        <li><BsCheck className='service_list-icon'/>I can design beautiful and functional interfaces that are easy to use</li>
                        <li><BsCheck className='service_list-icon'/>I love creative ideas that brings me joy to my work</li>
                    </ul>
                </article>

                {/* End of the Article */}
                <article className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li><BsCheck className='service_list-icon'/>I develop fullstack easy to use applications </li>
                        <li><BsCheck className='service_list-icon'/>I focus on fast, responsive and user-friendly applications</li>
                        <li><BsCheck className='service_list-icon'/>I like to add new technologies and packages on every new projects</li>
                        <li><BsCheck className='service_list-icon'/>I always look forward to learn new technologies and apply it on real life projects</li>
                        <li><BsCheck className='service_list-icon'/>It is definitely a passion in the process of bringing life to a new designed application for users</li>
                    </ul>
                </article>

                {/* End of the Article */}
                <article className='service'>
                    <div className="service_head">
                        <h3>Deliver Task</h3>
                    </div>

                    <ul className='service_list'>
                        <li><BsCheck className='service_list-icon'/>I am a very responsible person, like to deliver my tasks in time</li>
                        <li><BsCheck className='service_list-icon'/>I am sincere about finishing the clients given task no matter what</li>
                        <li><BsCheck className='service_list-icon'/>I deliver my application by combining the design and development skills. </li>
                        <li><BsCheck className='service_list-icon'/>In the process of finishing a project I alway tend to have fun with it by learning new things</li>
                        
                    </ul>
                </article>

                {/* End of the Article */}


            </div>
        </section>
    );
};

export default Services;