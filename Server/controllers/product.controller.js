const { Product } = require("../models/product.model.js");
const { CategoryProduct } = require("../models/productsCategories.model.js");

 const createProduct = async (req,res)=>{
    try{
        const product = new Product(req.body)
        await product.save()

        const categoryProducts =products.map(product => ({
            productId: product._id,
            category: product.category,
            name: product.name
        }))
        
        await categoryProducts.save()
        res.status(201).json({message:"Product Created & Data Extracted",product, categoryProducts})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const getAllProducts = async(req,res)=>{
    try{
        const {category, priceRange, rating, sortOrder} = req.query
        let filter ={}
        if(category) filter.category = category
        if(priceRange){
            const [min, max] = priceRange.split('').map(Number)
            filter.price = {$gte: min, $lte:max}
        }

        if(rating){
            filter ['rating.length'] = {$gte:Number(rating)}
        }
        let sortOption = {}
        if(sortOrder === "low-to-high") sortOption.price=1
        else if (sortOrder === "high-to-low") sortOption.price = -1
        else if (sortOrder === "popular") sortOption.rating = -1
        const products = await Product.find(filter).sort(sortOption)
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
 const getProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message:"Product not found"})
            res.status(200).json(product)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

 const updateProduct = async (req,res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateProduct) return res.status(404).json({message:"Product not found"})
            res.status(200).json({message:"Product updated Successfully",updateProduct})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

 const deleteProduct = async (req,res)=>{
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deleteProduct) return res.status(404).json({message:"Product not found"})
            res.status(200).json({message:"Product deleted Successfully",deleteProduct})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}
