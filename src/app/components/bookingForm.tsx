"use client";
import { useState } from "react";
import "../styles/bookingform.css";
import "../globals.css";

const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    unitId: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]:  // convert html strings to numbers
          name==="unitId" || name==="guests"
            ? Number(value) : value,
    });
  }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await fetch("/api/bookings", {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();
        console.log(data)

        if(response.ok){
            alert("Inquiry sent!");
            setForm(initialForm);
        }else{
          console.log("someting wrong")
            alert("hmm.. something went wrong sending your booking");
        }
         
    }
  return (
    <section className="booking-section">
      <h1 className="text-3xl py-4">Create Booking Inquiry</h1>
      <p className="">Once you submit a booking inquiry, expect a confirmation email in your inbox. 
        
      </p>

      <form onSubmit={handleSubmit}>
        {/* CheckIn + Check out */}
        <div className="grid grid-cols-2 gap-4 form-group">
            <div>
            <label htmlFor="checkIn">Check In</label>
            <input
             id="checkIn"
             name="checkIn"
             type="date"
             onChange={handleChange}
             required
            />
            </div>
            <div>
            <label htmlFor="checkOut">Check Out</label>
            <input
             id="checkOut"
             name="checkOut"
             type="date"
             onChange={handleChange}
             required
            />
            </div>
        </div>
        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 form-group">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
          />
        </div>



        {/* Unit + Guests */}
        <div className="grid grid-cols-2 gap-4 form-group">
          <div>
            <label htmlFor="unitId">Unit</label>
            <select
              id="unitId"
              name="unitId"
              value={form.unitId}
              onChange={handleChange}
            >
              <option value="">Select a unit</option>
              <option value="1">Cedar Loft</option>
              <option value="2">Maple Loft</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests">Guests</label>
            <select
              id="guests"
              name="guests"
              value={form.guests}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Special request or message</label>
          <textarea
            id="message"
            className="message-box"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button className="text-lg" type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
}
