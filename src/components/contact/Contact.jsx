import { useState, useRef } from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Set up your EmailJS service credentials
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publicID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  // Create the template parameters with the form data
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicID).then(
      (result) => {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 3000);
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleEmailChange}
              required
            />
            <textarea
              value={message}
              name="message"
              onChange={handleMessageChange}
              required
            ></textarea>
            <button type="submit">Send</button>
            {emailSent && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
        </div>
        <a href="#intro" className="intro-arrow">
          <button className={`scroll-to-top-button`}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </a>
      </div>
      <footer class="inline-footer">
        <div class="footer-content">
          <span class="icon-left">♚</span>
          <p>© 2023 - MADE BY HAMZA MALIK</p>
          <span class="icon-right">♚</span>
        </div>
      </footer>
    </div>
  );
}
