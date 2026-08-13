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
        return NextResponse.json(booking, { status:201 });
    }catch(err){
        console.error("Error creating booking: ", err)
        return NextResponse.json(
            {success:false},
            {status:500}
        )
    }
}
// Get ALL bookings
export async function GET() {
    try {
        const bookings = await prisma.booking.findMany({
            include: {
                unit: true,
            },
        });

        return NextResponse.json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);

        return NextResponse.json(
            { success: false, error: "Failed to fetch bookings" },
            { status: 500 }
        );
    }
}
// receive form data



// validate

// save

