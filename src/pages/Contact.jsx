import React, { useRef } from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwrctdn",
        "template_rysf38i",
        form.current,
        "Cty9QSKBbCk7FC5SH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactPage>
      <h3>Contact Us</h3>
      <div className="contactContainer">
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="formControl">
              <label htmlFor="">Full Name:</label>
              <input type="text" name="name" />
            </div>
            <div className="formControl">
              <label htmlFor="">Email Address:</label>
              <input type="text" required name="email" />
            </div>
            <div className="formControl">
              <label htmlFor="">Message:</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit"> Send Message</button>
          </form>
        </div>
        <div className="socialMedia">
          <a
            href="https://www.instagram.com/bellabeautyorganics"
            target="_blank"
          >
            <AiOutlineInstagram size={20} />
            bellabeautyorganics
          </a>
          <a
            href="https://www.facebook.com/bellabeautyorganics"
            target="_blank"
          >
            <AiFillFacebook size={20} /> Facebook
          </a>
          <a href="https://wa.me/message/2JB34EQTOJY6F1" target="_blank">
            <AiOutlineWhatsApp size={20} /> Whatsapp
          </a>
          <a href="tel:+2348039766079">
            <AiOutlinePhone size={20} />
            +2348039766079
          </a>
        </div>
      </div>
    </ContactPage>
  );
};

const ContactPage = styled.div`
  width: 100%;
  padding: 0rem 10rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  .contactContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 70%;
  }
  h3 {
    margin-top: 0rem;
    color: var(--primary);
  }
  .contactForm {
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
      color: var(--primary);
    }
    input {
      font-size: 1rem;
      padding: 0.7rem 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
    }
    textarea {
      font-size: 1rem;
      resize: none;
      border-radius: 0.5rem;
      border: 1px solid var(--primary);
    }
  }
  .formControl {
    display: flex;
    flex-direction: column;
  }
  button {
    padding: 0.5rem 0;
    width: 12rem;
    text-align: center;
    background: var(--background);
    color: var(--white);
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: 400ms all ease-in-out;
    margin-top: 1rem;
  }
  button:hover {
    padding: 0.5rem 0;
    width: 12rem;
    text-align: center;
    background: var(--white);
    color: var(--primary);
    border-radius: 0.3rem;
    border: 1px solid var(--primary);
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: 400ms all ease-in-out;
    margin-top: 1rem;
  }
  .socialMedia {
    width: 100%;
    line-height: 3rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    padding: 0rem 1rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .contactContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
    h3 {
      margin-top: 7rem;
      color: var(--primary);
    }
    .contactForm {
      width: 100%;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      label {
        color: var(--primary);
        font-size: 0.7rem;
      }
      input {
        font-size: 0.7rem;
        padding: 0.7rem 0.5rem;
        border-radius: 0.5rem;
      }
      textarea {
        font-size: 0.7rem;
        resize: none;
        border-radius: 0.5rem;
      }
    }
    .formControl {
      display: flex;
      flex-direction: column;
    }
    button {
      padding: 0.5rem 0;
      width: 100%;
      text-align: center;
      background: var(--background);
      color: var(--white);
      border-radius: 0.3rem;
      cursor: pointer;
      font-size: 0.7rem;
      letter-spacing: 0.1rem;
      transition: 400ms all ease-in-out;
      margin-top: 1rem;
    }
    button:hover {
      padding: 0.5rem 0;
      width: 100%;
      text-align: center;
      background: var(--white);
      color: var(--primary);
      border-radius: 0.3rem;
      border: 1px solid var(--primary);
      cursor: pointer;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      transition: 400ms all ease-in-out;
      margin-top: 1rem;
    }
    .socialMedia {
      width: 100%;
      font-size: 0.7rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
      justify-content: start;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      color: var(--primary);
    }
  }
`;
export default Contact;
