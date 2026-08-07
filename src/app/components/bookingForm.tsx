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
            message: ""
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
            <div className="mt-auto flex">

            <h1>First Name</h1>
            <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
            />
            <h1>Last Name</h1>
            <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
            />
            </div>
            <h1>Email Address</h1>
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <h1>Phone Number</h1>
            <input
                name=""
                value={form.firstName}
                onChange={handleChange}
            />
            <select>
                <option value="Cedar Loft">Cedar Loft</option>
                <option value="Maple Loft">Maple Loft</option>
            </select>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <h1>Special request or message</h1>
            <input
                name="message"
                value={form.message}
                onChange={handleChange}
            />

            
        </form>

        </div>

    );
}