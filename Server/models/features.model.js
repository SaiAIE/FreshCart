import mongoose from "mongoose";

const featuresSchema = new mongoose.Schema({
    icon:{type:String, required:true},
    title:{type:String, required: true},
    description:{type:String,required:true}
})

export const Features = mongoose.model("Features",featuresSchema)