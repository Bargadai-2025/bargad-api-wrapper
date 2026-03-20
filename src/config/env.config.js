import dotenv from "dotenv";

dotenv.config({
    path: ".env.dev"
});

export const BASE_URL = process.env.PORT;
export const DB_PATH = process.env.MONGODB_URI;
export const IPQS_API_KEY=process.env.IPQS_API_KEY;
export const ONGRID_API_KEY=process.env.ONGRID_API_KEY;