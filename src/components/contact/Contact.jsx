import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sqe2gfv",
        "template_qbm7vxa",
        formRef.current,
        "dvnojY9igzYYpD_Kc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(handleSubmit)

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +923499749467
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              mubeenbarcha235@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Rahimabad No# 1 near DJ high school Rahimabad
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>what is your work?</b> Full Name. Obviously, getting the contact's name is the most important field to include on a contact form. ..
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank you...."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;