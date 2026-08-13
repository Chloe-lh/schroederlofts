// booking form
import { neon } from "@neondatabase/serverless";
import { prisma } from "@/lib/prisma";
import BookingForm from "@/app/components/bookingForm"

export default async function BookingPage() {
  const bookings = await prisma.booking.findMany();

  return (
    <div className="">
    <BookingForm/>
    </div>
      
  );
}