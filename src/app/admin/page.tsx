// booking form
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export default async function Admin() {
  const bookings = await sql`
    SELECT * FROM bookings
  `;

  return (
    <div>
      {bookings.map((booking) => (
        <p key={booking.id}>{booking.name}</p>
      ))}
    </div>
  );
}