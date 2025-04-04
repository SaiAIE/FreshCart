const mongoose = require("mongoose")

const CategoryProductSchema = new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,required:true, ref: "Product"},
    category:{type:String, required:true ,trim:true},
    name:{type:String, required:true,trim:true},
},{timestamps:true})

const CategoryProduct = mongoose.model("CategoryProduct", CategoryProductSchema)
module.exports = {CategoryProduct}