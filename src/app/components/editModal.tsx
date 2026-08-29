"use client";

import { useState } from "react";

type Booking = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    unit: String;
    guests: number;
    checkIn: string;
    checkOut: string;
};

type Props = {
    booking: Booking;
    onClose: () => void;
    onSave: (updatedBooking: Booking) => void;
};

export default function EditBookingModal({
    booking,
    onClose,
    onSave,
}: Props) {

    const [formData, setFormData] = useState({
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        phone: booking.phone,
        unit: booking.unit,
        guests: booking.guests,
        checkIn: booking.checkIn.slice(0, 10),
        checkOut: booking.checkOut.slice(0, 10),
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === "guests" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `/api/bookings/${booking.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

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

                <h2>Edit Booking</h2>

                <form onSubmit={handleSubmit}>

                    <label>
                        First Name
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Last Name
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Phone
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Guests
                        <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Check-in
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Check-out
                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="modal-buttons">
                        <button type="submit">
                            Save changes
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
}