// booking form
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const bookings = await prisma.booking.findMany({
    include: {
      unit: true,
    },
  });

  return (
    <div>
      {JSON.stringify(bookings)}
    </div>
  );
}