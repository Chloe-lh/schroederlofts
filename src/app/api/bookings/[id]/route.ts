import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";

// Get ONE booking
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
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
    }catch(err){
        return Response.json(
            {success:false},
            {status:500}
        )
    }
}

// Update ONE booking
export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
    try{
        const { id } = await params;
        const body = await request.json();
        const data: any = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            guests: body.guests,
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
    }catch(err){
        return Response.json(
            {success:false, error:err},
            {status:500},

        )
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id:string }>}
){
    try{
        const { id } = await params;

        const booking = await prisma.booking.delete({
            where: {
                id: Number(id),
            },
        });
        return NextResponse.json(booking, {status:200});
    }catch(err){
        console.error("Error deleting booking: ", err)
        return Response.json(
            {success:false, error:"Failed to delete booking."},
            {status:500}
        )
    }
}