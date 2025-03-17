const mongoose = require("mongoose")
const timerSchema = new mongoose.Schema({
    days:{type: Number},
    hours:{type: Number},
    mins:{type: Number},
    secs:{type: Number},
},{_id:false})

const dailySellSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    category:{
        type:String,
        deafult:"General"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    originalPrice:{
        type:String
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    buttonText:{
        type:String,
        required:true
    },
    timer: { type:timerSchema, required:false,default:undefined}
})

const DailySell = mongoose.model("DailySell",dailySellSchema)
module.exports={DailySell}