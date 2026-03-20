import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const DB_PATH = process.env.MONGODB_URI || "mongodb://localhost:27017/bargad";
export const IPQS_API_KEY = process.env.IPQS_API_KEY || "";
export const ONGRID_API_KEY = process.env.ONGRID_API_KEY || "";