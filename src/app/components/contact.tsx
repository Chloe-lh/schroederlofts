"use client";

import { useState } from 'react';
import '../styles/contact.css';

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
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/contact", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if(data.success){
            alert("Message sent!");
            setForm({name: "", email:"", message:""});
        }else{
            alert("hmm.. something went wrong");
        }
        
            
            
    }

    return (
        <section className="contact-container">
            <h1>Any Questions?</h1>
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