import { NextResponse } from "next/server"
export async function POST(request: Request){
    try{
        const auth = await request.json();
        console.log("auth received:", auth);
        if (auth.password != process.env.ADMIN_PASS){
            return NextResponse.json(
                { error:"Invalid password"},
                {status:401}
            )
        }
        const response = NextResponse.json({status:200})
            response.cookies.set("admin_session", "authenticated", {
            httpOnly: true,
           // secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });
        return response;
    }catch(er){
        console.log(er)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}