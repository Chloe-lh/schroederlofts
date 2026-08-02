// reusable Prisma Client
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
// (We'll add the adapter configuration once we confirm your setup.)

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({
    adapter,
});