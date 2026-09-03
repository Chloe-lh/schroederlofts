import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
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
    }catch(er){
        return NextResponse.json(
            {error:er},
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

