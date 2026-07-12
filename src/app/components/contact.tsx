"use client";

import { useState } from 'react';
import './contact.css';
import emailjs from "emailjs-com"
export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        emailjs.send(
            "service_yis4ztb",
            "template_mw76eec",
            form,
            "00aBhkGZ7c8MH7fw8"
        )
        .then(
            (result) => {
                console.log("Message submitted");
                alert("Message sent!");
                setForm({name: "", email:"", message:""});
            },
            (error) => {
                console.error("Error sending email: ", error.text);
                alert("Failed to send message");
            }
        )
    }

    return (
        <section className="contact-container">
            <h1>Lets Chat!</h1>
            <form onSubmit={handleSubmit}>
                <input className="nameInput"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required />
                <input className="emailInput"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required />
                <textarea className="messageInput"
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}