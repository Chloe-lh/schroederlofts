// booking form
"use client";
import Image from "next/image";
import "../styles/admin.css";
import "../globals.css";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
export default function Admin() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getBookings() {
      const response = await fetch("/api/bookings");
      const data = await response.json();
      console.log("STATUS:", response.status);
      console.log("DATA:", data);
      console.log("IS ARRAY:", Array.isArray(data));

      if (Array.isArray(data)) {
        setBookings(data);
      } else {
        console.error("Expected an array but received:", data);
        setBookings([]);
      }
      setLoading(false);
    }

    getBookings();
  }, []);

  if (loading) {
    return (
      <div className="message text-xl">
        <h1>Loading bookings... stick with me here..</h1>;
      </div>
    );
  }
  if (bookings.length === 0) {
    return (
      <div className="message text-xl">
        <h1>You have no bookings!!!</h1>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <h1 className="text-2xl">Bookings</h1>
      <div className="bookings-section">
        {bookings.map((booking) => (
          <div className="booking-card text-lg" key={booking.id}>
            <div className="info">
              <div>
                <h2 className="text-5xl">
                  {booking.firstName} {booking.lastName}
                </h2>
                <p>{booking.email}</p>
                <p>{booking.phone}</p>
              </div>

              <div>
                <strong>{booking.unit.name}</strong>
                <p>
                  {new Date(booking.checkIn).toLocaleDateString()} →{" "}
                  {new Date(booking.checkOut).toLocaleDateString()}
                </p>
                <p>{booking.guests} guests</p>
              </div>

              <div>
                <span>{booking.status}</span>
              </div>
            </div>
            <div className="button-group">
              <button className="confirm-button">
                <CheckIcon className="icon" />
                Confirm booking
              </button>
              <button className="edit-button">
                <PencilSquareIcon className="icon" />
                Edit booking
              </button>
              <button className="delete-button">X delete booking</button>
              
              

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
