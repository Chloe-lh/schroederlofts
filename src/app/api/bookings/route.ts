import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

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

