const mongoose = require("mongoose")

const SliderSchema = new mongoose.Schema({
    img:{type:String,required:true},
    tag:{type:String,required:true},
    heading:{type:String,required:true},
    description:{type:String,required:true},
    buttonText:{type:String,default:"Shop Now"}
})

const Slider = mongoose.model("Slider",SliderSchema)
module.exports={Slider}