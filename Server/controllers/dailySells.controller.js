import { DailySell } from "../models/dailySells.model.js";

export const createDailySell = async (req,res)=>{
    try{
        const dailySell = new DailySell(req.body)
        await dailySell.save()
        res.status(201).json({message:"Daily Sell Created Successfully",dailySell})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getAllDailySell = async(req,res)=>{
    try{
        const dailySells = await DailySell.find()
        res.status(200).json(dailySells)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
export const getDailySellById = async(req,res)=>{
    try{
        const dailySell = await DailySell.findById(req.params.id)
        if(!dailySell) return res.status(404).json({message:"Daily Sell not found"})
            res.status(200).json(dailySell)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const updateDailySell = async (req,res)=>{
    try{
        const updateDailySell = await DailySell.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateDailySell) return res.status(404).json({message:"Daily Sell not found"})
            res.status(200).json({message:"Daily Sell updated Successfully",updateDailySell})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deleteDailySell = async (req,res)=>{
    try{
        const deleteDailySell = await DailySell.findByIdAndDelete(req.params.id)
        if(!deleteDailySell) return res.status(404).json({message:"Daily Sell not found"})
            res.status(200).json({message:"Daily Sell deleted Successfully",deleteDailySell})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
