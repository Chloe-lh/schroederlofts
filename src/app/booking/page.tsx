// booking form
import { neon } from "@neondatabase/serverless";
import { prisma } from "@/lib/prisma";
import BookingForm from "@/app/components/bookingForm";
import "../globals.css";

export default async function BookingPage() {

  return (
    <div className="">
    <BookingForm/>
    </div>
      
  );
}