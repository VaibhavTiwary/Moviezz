// const express = require("express")

import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./connections/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

databaseconnection();

dotenv.config({
    path: ".env"
})

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

// API
app.use("/api/v1/user", userRoute);




app.listen(process.env.PORT, () => {
    console.log(`server listen at port ${process.env.PORT}`);
});