const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true}
})

const Category = mongoose.model("Category",categorySchema)
module.exports ={Category}