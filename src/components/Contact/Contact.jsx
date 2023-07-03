import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ihmlmsn', 'template_empm3ge', form.current, 'Esax0AzUxPYPUWpv_')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thank you for sending a message!',
            showConfirmButton: false,
            timer: 1500
          })  
        e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get In Touch With Me</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>mehedievo@gmail.com</h5>
                        <a href="mailto:mehediEvo@gmail.com" target='__blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <FaFacebookMessenger className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Mehedi Hasan Evo</h5>
                        <a href="https://m.me/mehedihasan.evo/" target='__blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BiLogoWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801626618090</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801626618090" target='__blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit'className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;