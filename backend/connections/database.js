import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config({
    path: "../.env"
})

const databaseconnection = () => {
    mongoose.connect("mongodb+srv://vaibhavtiwary7766:moviezz@cluster0.8pug0ig.mongodb.net/").then(() => {
        console.log("Mongodb Connected Successfully");
    }).catch((error) => {
        console.log(error);
    })
};
export default databaseconnection;