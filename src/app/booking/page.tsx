// booking form
import { neon } from "@neondatabase/serverless";
import { prisma } from "@/lib/prisma";
import BookingForm from "@/app/components/bookingForm"

export default async function BookingPage() {

  return (
    <div className="m-100">
    <BookingForm/>
    </div>
      
  );
}