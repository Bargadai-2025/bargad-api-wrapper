import mongoose from "mongoose";
import { DB_PATH } from "../config/env.config.js";
// import dns from 'dns';

// dns.setServers([
//     "1.1.1.1",
//     "8.8.8.8"
// ]);
export default async function connectToDatabase() {
    try {
        await mongoose.connect(DB_PATH);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}   