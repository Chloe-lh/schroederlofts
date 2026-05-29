export type guest = {
    gid: string,
    name: string,
    email: string,
    phone: string,
}

export type booking = {
    bid: string,
    gid: string,
    name: string,
    amount: number,
    arrival: string,
    departure: string,
    
    room: "cedar" | "maple",
    status: 'pending' | 'paid';
}