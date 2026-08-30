"use client";
import "../styles/editModal.css";
import { useState } from "react";

type Booking = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  unit: {
    id: number;
    phone: string;
  };
  guests: number;
  checkIn: string;
  checkOut: string;
};

type Props = {
  booking: Booking;
  onClose: () => void;
  onSave: (updatedBooking: Booking) => void;
};

export default function EditBookingModal({ booking, onClose, onSave }: Props) {
  const [formData, setFormData] = useState({
    firstName: booking.firstName,
    lastName: booking.lastName,
    email: booking.email,
    phone: booking.phone,
    unitId: booking.unit.id,
    guests: booking.guests,
    checkIn: booking.checkIn.slice(0, 10),
    checkOut: booking.checkOut.slice(0, 10),
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:  // convert html strings to numbers
          name==="unitId" || name==="guests"
            ? Number(value) : value,
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/bookings/${booking.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update booking");
      }

      const updatedBooking = await response.json();

      onSave(updatedBooking);
      onClose();
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <h2 className="text-3xl">Edit Booking</h2>

        <form onSubmit={handleSubmit}>
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
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
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
              value={formData.email}
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
              value={formData.phone}
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
                value={formData.unitId}
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
                value={booking.guests}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <button type="submit" className="text-lg">
            Confirm
          </button>
          <button type="button" className="text-lg" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
