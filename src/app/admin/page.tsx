// booking form
"use client";
import Image from "next/image";


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
    return <p>Loading bookings... stick with me here..</p>;
  }

  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map((booking) => (
        <div className="booking-card" key={booking.id}>
          <div>
            <h2>
              {booking.firstName} {booking.lastName}
            </h2>
            <p>{booking.email}</p>
            <p>{booking.phone}</p>
          </div>

          <div>
            <strong>{booking.unit.name}</strong>
            <p>
              {booking.checkIn} → {booking.checkOut}
            </p>
            <p>{booking.guests} guests</p>
          </div>

          <div>
            <span>{booking.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
