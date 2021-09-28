import { useRef, useState } from "react";
import "./contact.scss";

import emailjs from 'emailjs-com';

const Contact = () => {
    const [isMessage, setMessage] = useState(false);
    const form = useRef();
    const email = useRef();
    const message = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_bflnsot', form.current, 'user_dgFBYTYYSQIbnWdlPniCO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name="email" ref={email} required />
                    <textarea type="text" placeholder="Type a message" name="message" ref={message} required ></textarea>
                    <button type="submit">Send</button>
                    {isMessage && <span>Thanks..!, i'll reply ASAP :)</span>}
                </form>
            </div>
            
        </div>
    )
}

export default Contact
