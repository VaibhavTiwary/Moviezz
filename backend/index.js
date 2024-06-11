// const express = require("express")

import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./connections/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

databaseconnection();

dotenv.config({
    path: ".env"
})

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// API
app.use("/api/v1/user", userRoute);




app.listen(process.env.PORT, () => {
    console.log(`server listen at port ${process.env.PORT}`);
});