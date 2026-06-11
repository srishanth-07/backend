import dotenv from "dotenv";
import mongoose from "mongoose";
import { db_name } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB();


/*
import express from "express";
const app = express();

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`);
        console.log("Connected to MongoDB");

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();
*/