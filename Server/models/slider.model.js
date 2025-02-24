import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema({
    img:{type:String,required:true},
    tag:{type:String,required:true},
    heading:{type:String,required:true},
    description:{type:String,required:true},
    buttonText:{type:String,default:"Shop Now"}
})

export const Slider = mongoose.model("Slider",SliderSchema)