import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//create/read bookings
// Create one booking
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
            totalPrice
            } = await request.json();
        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !checkIn ||
            !checkOut ||
            !guests ||
            !unitId ||
            !totalPrice
        ) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }
        await prisma.booking.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),
                guests,
                totalPrice,

                unit: {
                connect: {
                    id: unitId,
                },
                },
            },
            });

            // await transporter.sendMail({
            //     from: process.env.EMAIL_USER,
            //     to: email,
            //     subject: `Confirmation email from The Lofts at Schroeder Creek`,
            //     html: `
            //         <h2>We've received your booking request!</h2>
                    
            //         <p>Thank you for booking with us! Jim and Jana have 
            //         received your booking request and will reach out 
            //         to confirm your dates and organize payment</p>

            //         <p>If anything comes up or you would like to cancel your booking, 
            //             please feel let us know by replying to this email</p>

            //         <p>this is an automated email, but you'll be in contact with Jana from now on.</p>"

            //     `,
            // })
        return NextResponse.json(booking, { status:201 });
    }catch(err){
        console.error("Error creating booking: ", err)
        return Response.json(
            {success:false},
            {status:500}
        )
    }
}
// Get ALL bookins
export async function GET(){
    try{
        const bookings = prisma.booking.findMany({
            include: {
                unit: true,
            }
        })
        return NextResponse.json(bookings, {
            status:200,
        });
    }catch(err){
        return Response.json(
            {success:false},
            {status:500}
        )
    }
}
// receive form data


// validate

// save

