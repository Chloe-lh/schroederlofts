// booking form
"use client";
import Image from "next/image";
import "../styles/admin.css";
import "../globals.css";
import EditBookingModal from "../components/editModal";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
export default function Admin() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBooking, setEditingBooking] = useState<any | null>(null);
  useEffect(() => {
    async function getBookings() {
      const response = await fetch("/api/bookings");
      const data = await response.json();

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
      <div className="message text-3xl">
        <h1>Loading bookings... stick with me here..</h1>;
      </div>
    );
  }
  if (bookings.length === 0) {
    return (
      <div className="message text-3xl">
        <h1>You have no bookings!!!</h1>
      </div>
    );
  }

  const deleteBooking = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?",
    );
    if (!confirmed) return;
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking");
      }

      // Remove the booking from the page
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id),
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <div className="admin-page">
      <h2 className="text-5xl p-6">Bookings</h2>
      <div className="bookings-section">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <div className="booking-header">
              <div>
                <h2>
                  {booking.firstName} {booking.lastName}
                </h2>
                <p>
                  {booking.email} · {booking.phone}
                </p>
              </div>

              <span className="status">{booking.status}</span>
            </div>

            <div className="booking-info">
              <div>
                <span>Loft</span>
                <strong>{booking.unit.name}</strong>
              </div>

              <div>
                <span>Dates</span>
                <strong>
                  {new Date(booking.checkIn).toLocaleDateString()} →{" "}
                  {new Date(booking.checkOut).toLocaleDateString()}
                </strong>
              </div>

              <div>
                <span>Guests</span>
                <strong>{booking.guests}</strong>
              </div>

              <div className="booking-message">
                <span>Message</span>
                <p>{booking.message}</p>
              </div>
            </div>

            <div className="button-group">
              <button className="confirm-button">
                <CheckIcon className="icon" />
                Confirm booking
              </button>

              <button
                className="edit-button"
                onClick={() => setEditingBooking(booking)}
              >
                <PencilSquareIcon className="icon" />
                Edit booking
              </button>

              <button
                className="delete-button"
                onClick={() => deleteBooking(booking.id)}
              >
                X Delete booking
              </button>
            </div>
          </div>
        ))}
      </div>
              {editingBooking && (
            <EditBookingModal
                booking={editingBooking}
                onClose={() => setEditingBooking(null)}
                onSave={(updatedBooking) => {
                    setBookings((prevBookings) =>
                        prevBookings.map((booking) =>
                            booking.id === updatedBooking.id
                                ? updatedBooking
                                : booking
                        )
                    );
                }}
            />
        )}

    </div>
  );
}
