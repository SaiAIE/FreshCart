import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    offer:{
        type:String,
        required:true
    }
})

export const Grocery = mongoose.model("Grocery",grocerySchema)