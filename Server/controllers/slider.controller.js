const { Slider } = require("../models/slider.model.js");

 const createSlider = async (req,res)=>{
    try{
        const slider = new Slider(req.body)
        await slider.save()
        res.status(201).json({message:"Slider Created Successfully",slider})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const getAllSlider = async(req,res)=>{
    try{
        const sliders = await Slider.find()
        res.status(200).json(sliders)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
 const getSliderById = async(req,res)=>{
    try{
        const slider = await Slider.findById(req.params.id)
        if(!slider) return res.status(404).json({message:"Slider not found"})
            res.status(200).json(slider)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const updateSlider = async (req,res)=>{
    try{
        const updateSlider = await Slider.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateSlider) return res.status(404).json({message:"Slider not found"})
            res.status(200).json({message:"Slider updated Successfully",updateSlider})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

 const deleteSlider = async (req,res)=>{
    try{
        const deleteSlider = await Slider.findByIdAndDelete(req.params.id)
        if(!deleteSlider) return res.status(404).json({message:"Slider not found"})
            res.status(200).json({message:"Slider deleted Successfully",deleteSlider})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports = {createSlider,getAllSlider,getSliderById,updateSlider,deleteSlider}