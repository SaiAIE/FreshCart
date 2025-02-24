import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    items:[
        {
            type:String,
            required:true
        }
    ]
})

export const Footer = mongoose.model("Footer",FooterSchema)