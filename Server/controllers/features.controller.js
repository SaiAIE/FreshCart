const { Features } = require("../models/features.model.js");

 const createFeature = async (req,res)=>{
    try{
        const feature = new Features(req.body)
        await feature.save()
        res.status(201).json({message:"Feature Created Successfully",feature})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const getAllFeatures = async(req,res)=>{
    try{
        const features = await Features.find()
        res.status(200).json(features)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
 const getFeatureById = async(req,res)=>{
    try{
        const feature = await Features.findById(req.params.id)
        if(!feature) return res.status(404).json({message:"Feature not found"})
            res.status(200).json(feature)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const updateFeature = async (req,res)=>{
    try{
        const updateFeature = await Features.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateFeature) return res.status(404).json({message:"Feature not found"})
            res.status(200).json({message:"Feature updated Successfully",updateFeature})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

 const deleteFeature = async (req,res)=>{
    try{
        const deleteFeature = await Features.findByIdAndDelete(req.params.id)
        if(!deleteFeature) return res.status(404).json({message:"Feature not found"})
            res.status(200).json({message:"Feature deleted Successfully",deleteFeature})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


module.exports = {createFeature,getAllFeatures,getFeatureById,updateFeature,deleteFeature}