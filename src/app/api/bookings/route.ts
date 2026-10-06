import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import { cookies } from "next/headers";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create ONE booking
export async function POST(request: Request){
    try{
        const {
            firstName,
            lastName,
            email,
            phone,
            checkIn,
            checkOut,
            guests,
            unitId,
            message
            } = await request.json();
            console.log("unitId received:", unitId);
        if (
            !firstName ||
            !lastName ||
            !email ||
            !checkIn ||
            !checkOut ||
            !guests
        ) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }
        const booking = await prisma.booking.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                message,

                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),

                guests,

                unit: {
                connect: {
                    id: unitId,
                },
                },
                
            },
            });

            // await transporter.sendMail({
            //     from: process.env.EMAIL_USER,
            //     to: process.env.EMAIL_USER,
            //     subject: `New B&B Booking`,
            //     html: `
            //         <h2>You have received a new booking!!!!</h2>
                    
            //         <p><strong>Name: </strong> ${firstName} ${lastName}</p>
            //         <p><strong>Email: </strong>${email}</p>
            //         <p><strong>Phone number: </strong>${phone}</p>
            //         <p><strong>Check In: </strong>${checkIn}</p>
            //         <p><strong>Check Out: </strong>${checkOut}</p>
            //         <p><strong># Guests: </strong>${guests}</p>
            //         <p><strong>Message: </strong>${message}</p>

            //         <p>This booking is NOT confirmed yet, only reserved. Reach out to the above contact to organize payment and confirm the booking.
            //             Dont forget! You can confirm this booking, edit it, or cancel it on the admin page</p>

            //         <p>this is an automated email.</p>
            //         <p>Love ya</p>
            //         <p> - Chloe</p>

            //     `,
            // })
        return NextResponse.json(booking, { status:201 });
    }catch(er){
        return NextResponse.json(
            {error: "booking creation error"},
            {status:500},
        )
    }
}
// Get ALL bookings
export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    if (session?.value !== "authenticated") {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try {
        const bookings = await prisma.booking.findMany({
            include: {
                unit: true,
            },
        });

        return NextResponse.json(bookings);
    }catch(er){
        console.error(er)
        return NextResponse.json(
            {error:"Failed to get bookings"},
            {status:500},
        )
    }
}
// receive form data



// validate

// save

