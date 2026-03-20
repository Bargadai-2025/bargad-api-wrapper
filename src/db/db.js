import mongoose from "mongoose";
import { DB_PATH } from "../config/env.config.js";

export default async function connectToDatabase() {
    try {
        if (!DB_PATH) {
            console.warn('⚠️ MONGODB_URI not set, skipping database connection');
            return;
        }

        await mongoose.connect(DB_PATH, {
            maxPoolSize: 10,
            minPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            retryWrites: true,
            w: 'majority'
        });

        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        console.error('Details:', error);
        // Don't exit - allow app to run without DB for now
        console.warn('⚠️ App running without database connection');
    }
}   