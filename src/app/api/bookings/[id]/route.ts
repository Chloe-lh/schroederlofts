import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
// Get ONE booking
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (session?.value !== "authenticated") {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try{
        const { id } = await params
        const booking = prisma.booking.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                unit: true,
            }
        })
        return NextResponse.json(booking, {
            status:200,
        });
    }catch(er){
        console.log(er)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// Update ONE booking
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (session?.value !== "authenticated") {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try{
        const { id } = await params;
        const body = await request.json();
        const data: any = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            guests: body.guests,
            status: body.status
        };

        if (body.checkIn){
            data.checkIn = new Date(body.checkIn)
        }
        if (body.checkOut){
            data.checkOut = new Date(body.checkOut)
        }

        if (body.unitId) {
            data.unit = {
                connect: {
                    id: Number(body.unitId),
                },
            };
        }
        const booking = await prisma.booking.update({
            where: {
                id:Number(id),
            },

            data,
            
            include: {
                unit: true,
            },
        });
        return NextResponse.json(booking, {status:200});
    }catch(er){
        console.log(er)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (session?.value !== "authenticated") {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try{
        const { id } = await params;

        const booking = await prisma.booking.delete({
            where: {
                id: Number(id),
            },
        });
        return NextResponse.json(booking, {status:200});
    }catch(er){
        console.log(er)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}