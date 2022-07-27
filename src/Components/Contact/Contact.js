import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form>
        <label>First Name:</label>
        <input placeholder="first name" type="text" required />
        <label>Last Name:</label>
        <input placeholder="last name" type="text" />
        <label>Email:</label>
        <input placeholder="email" type="email" required />
        <label>Subject:</label>
        <textarea placeholder="subject" type="text" required></textarea>
      </form>
    </div>
  );
};

export default Contact;
