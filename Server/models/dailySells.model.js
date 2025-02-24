import mongoose from "mongoose"

const timerSchema = new mongoose.Schema({
    days:{type: Number,default:0},
    hours:{type: Number,default:0},
    mins:{type: Number,default:0},
    secs:{type: Number,default:0},
})

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
    timer: timerSchema
})

export const DailySell = mongoose.model("DailySell",dailySellSchema)
