import "../css/ContactForm.css";
import React from "react";
import {useState} from "react";

const ContactForm = () => {
    const [feedback, setFeedback] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2cc869cb-a5d4-4b4b-b609-7d0a0bd4ea78");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setFeedback("Sending...");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            setFeedback("Email sent");
        } else {
            setFeedback("Error sending email");
        }
  };

  return (
      <form id="contact-form" onSubmit={onSubmit}>
        <label for="txt-name">Name:</label>
        <p><input type="text" name="name" id="txt-name"/></p>
        <label for="txt-email">Email:</label>
        <p><input type="email" name="email" id="txt-email" /></p>
        <label for="txt-message">Message:</label>
        <p><textarea name="message" id="txt-message"></textarea></p>
        <p><button type="submit">Submit Form</button></p>
        <p>{feedback}</p>
      </form>
  );
}

export default ContactForm;