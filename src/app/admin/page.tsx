// booking form
"use client";
import Image from "next/image";
import "../styles/admin.css";
import "../globals.css";
import EditBookingModal from "../components/editModal";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import React, { useEffect, useState } from "react";

export default function Admin() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [editingBooking, setEditingBooking] = useState<any | null>(null);
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(true);


  const login = async() => {
    try{
      const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password }),
    });
      if(response.ok){
        setAuthenticated(true);
        setPassword("");
      }else{
        alert("Incorrect password");
        setPassword("");
        return;
      }
      

    }catch(er){
      console.log(er);
      alert("Something went wrong! Tell Chloe to look into this")

    }finally{
      setLoggingIn(false)

    }
  };
  useEffect(() => {
    if(!authenticated) return;

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
  }, [authenticated]);

  if(!authenticated){
    return(
      <div className="auth text-xl">
        <h1>Whats the password HUH?</h1>
          <input
              className="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                  if (e.key === "Enter") {
                      login();
                  }
              }}
          />

        <button onClick={login} disabled={loading}>
          {loggingIn ? "Log":"Login"}
        </button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="message text-3xl">
        <h1>Loading bookings... stick with me here..</h1>
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
      // Remove the booking from the page
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id),
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  
  const confirmBooking = async(id: number) => {
    console.log("pressed confirm")
    try{
      const response = await fetch(`/api/bookings/${id}`, {
        method:"PATCH",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          status: "CONFIRMED",
        })
      });
       const updatedBooking = await response.json();

        setBookings((prevBookings) =>
            prevBookings.map((booking) =>
                booking.id === id ? updatedBooking : booking
            )
        );
      
    } catch (error){
      console.error("Error confirming booking: ", error)
      alert("Sorry! Could not confirm booking. Tell Chloe to look into this")
    }
  };
  const markPending = async(id: number) => {
    try{
      const response = await fetch(`/api/bookings/${id}`, {
        method:"PATCH",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          status: "PENDING",
        })
      });
      const updatedBooking = await response.json();

      setBookings((prevBookings) =>
          prevBookings.map((booking) =>
              booking.id === id ? updatedBooking : booking
          )
      );
    } catch (error){
      console.error(error)
      alert("Sorry! Tell Chloe to look into this")
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
              {booking.status === "PENDING" && (
                <button className="confirm-button" 
                  onClick={() => confirmBooking(booking.id)}>
                <CheckIcon className="icon" />
                Confirm booking
              </button>
              )}
              {booking.status === "CONFIRMED" && (
                <button className="pending-button"
                  onClick = {() => markPending(booking.id)}>
                <CheckIcon className="icon" />
                Mark as Pending
              </button>
              )}
              {booking.status === "CANCELLED" && (
                <button className="pending-button">
                <FaceFrownIcon className="icon" />
                Cancelled
              </button>
              )}
              

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
