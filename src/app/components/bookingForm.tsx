"use client";

import { useState } from "react"

export default function BookingForm (){

    const [form, setForm] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            unitId: "",
            checkIn: "",
            checkOut: "",
            guests: 1,
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    }



    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // send to API

    }
    return (
        <div>

        <h1>Create Booking</h1>
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
            />
            <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                value={form.firstName}
                onChange={handleChange}
                required
            />
            <input
                name=""
                value={form.firstName}
                onChange={handleChange}
                required
            />
        
        
        </form>
        </div>

    );
}