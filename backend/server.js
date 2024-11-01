import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();


app.use(express.json());  // allows us to accept JSON data in the body

app.post("/api/products", async (req,res) => {
    const product = req.body; //User will send this data

    if(!product.name || !product.price || !product.image) {
        return res.statusCode(400).json({ success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product)
    
    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in creating product:",error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }    
});

// postman desktop app

app.listen(5000, () => {
    connectDB();
    console.log("Server Started at http://localhost:5000 ");
})