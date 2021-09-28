import { useRef, useState } from "react";
import "./contact.scss";

import emailjs from 'emailjs-com';
import { GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

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
                <div className="itemContainer">
                       <a target="_blank" href="https://github.com/Dheeraj-Bharti">
                       <GitHub className="icon"/>
                       </a>
                       <a target="_blank" href="https://www.linkedin.com/in/dheeraj-bharti-70a4baa4/">
                       <LinkedIn className="icon"/>
                       </a>
                       <a target="_blank" href="https://www.instagram.com/dheerajb234/">
                       <Instagram className="icon"/>
                       </a>
                       <a target="_blank" href="https://twitter.com/dheerajb234">
                       <Twitter className="icon"/>
                       </a>
                   </div>
            </div>
            
        </div>
    )
}

export default Contact
