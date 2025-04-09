const { Product } = require("../models/product.model.js");
const { CategoryProduct } = require("../models/productsCategories.model.js");

const createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
   
      const categoryProduct = new CategoryProduct({
        productId: product._id,
        category: product.category,
        name: product.name,
      });
   
      await categoryProduct.save();
   
      res.status(201).json({
        message: "Product Created & Data Extracted",
        product,
        categoryProduct,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const getAllProducts = async (req, res) => {
    try {
      const rawCategory = req.query.category?.trim().replace(/\/$/, "");
      const rawPriceRange = req.query.priceRange?.trim().replace(/\/$/, "");
      const rawRating = req.query.rating?.trim().replace(/\/$/, "");
      const rawSort = req.query.sort?.trim().replace(/\/$/, "");
   
      let filter = {};
      if (rawCategory) {
        filter.category = rawCategory;
      }
   
      if (rawRating) {
        filter.rating = { $gte: Number(rawRating) };
      }
   
      let products = await Product.find(filter).lean();
   
      if (rawPriceRange) {
        const [min, max] = rawPriceRange.split("-").map(Number);
        products = products.filter((p) => {
          const numericPrice = parseFloat(p.price.replace("$", ""));
          return numericPrice >= min && numericPrice <= max;
        });
      }
   
      if (rawSort === "low-to-high") {
        products.sort(
          (a, b) =>
            parseFloat(a.price.replace(/[^\d.]/g, "")) -
            parseFloat(b.price.replace(/[^\d.]/g, ""))
        );
      } else if (rawSort === "high-to-low") {
        products.sort(
          (a, b) =>
            parseFloat(b.price.replace(/[^\d.]/g, "")) -
            parseFloat(a.price.replace(/[^\d.]/g, ""))
        );
      } else if (rawSort === "popular") {
        products.sort(
          (a, b) =>
            (parseInt(b.rating) || 0) - (parseInt(a.rating) || 0)
        );
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

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
