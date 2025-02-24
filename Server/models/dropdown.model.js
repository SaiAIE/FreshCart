import mongoose from 'mongoose';

const MegaOptionSchema = new mongoose.Schema({
    title:{type:String, required:true},
    items:[{type:String}]
})

const OfferSchema = new mongoose.Schema({
    imgSrc:{type:String},
    text:{type:String},
    buttonText:{type:String},
})

const DropdownSchema = new mongoose.Schema({
    heading:{type:String},
    icon:{type:String},
    options:[{type:String}],
    megaOptions:[MegaOptionSchema],
    offer:OfferSchema,
    className:{type:String}
})

export const Dropdown = mongoose.model("Dropdown",DropdownSchema)