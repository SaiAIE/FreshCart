const { Product } = require("../models/product.model");
 const {CategoryProduct} = require("../models/productsCategories.model")
const extractAndStoreCategoryProducts = async (req, res) => {
    try {
        const products = await Product.find({}, { _id: 1, category: 1, name: 1 });
 
        const existingCategoryProducts = await CategoryProduct.find({}, "productId");
        const existingIds = existingCategoryProducts.map(cp => cp.productId.toString());
 
        const categoryProducts = products
            .filter(product => !existingIds.includes(product._id.toString())) // Avoid duplicates
            .map(product => ({
                productId: product._id,
                category: product.category,
                name: product.name
            }));
 
        if (categoryProducts.length > 0) {
            await CategoryProduct.insertMany(categoryProducts);
            res.status(201).json({ message: "Categories & products extracted successfully", data: categoryProducts });
        } else {
            res.status(200).json({ message: "No new products found to extract" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 
// Sync Existing Products Automatically
const syncExistingProducts = async () => {
    try {
        const existingProducts = await Product.find({}, "_id category name");
        const existingCategoryProducts = await CategoryProduct.find({}, "productId");
 
        const existingIds = existingCategoryProducts.map(cp => cp.productId.toString());
 
        const missingProducts = existingProducts.filter(p => !existingIds.includes(p._id.toString()));
 
        if (missingProducts.length > 0) {
            const newCategoryProducts = missingProducts.map(prod => ({
                productId: prod._id,
                category: prod.category,
                name: prod.name
            }));
 
            await CategoryProduct.insertMany(newCategoryProducts);
            console.log("✅ Synced missing products!");
        } else {
            console.log("✅ No missing products found.");
        }
    } catch (error) {
        console.error("❌ Error syncing data:", error);
    }
};
 
// Get All Categories & Products
const getAllCategoriesProducts = async (req, res) => {
    try {
        // Fetch all category-product mappings
        const categoryProducts = await CategoryProduct.find();
 
        // Group by category and transform into an array
        const groupedData = Object.entries(
            categoryProducts.reduce((acc, item) => {
                if (!acc[item.category]) {
                    acc[item.category] = [];
                }
                acc[item.category].push({
                    productId: item.productId,
                    name: item.name
                });
                return acc;
            }, {})
        ).map(([category, products]) => ({
            categoryName: category, // Category as a string
            products: products      // Array of products
        }));
 
        res.status(200).json(groupedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 
// Manual Sync Route
const manualSync = async (req, res) => {
    try {
        await syncExistingProducts();
        res.status(200).json({ message: "Manual Sync Completed Successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 
module.exports = { extractAndStoreCategoryProducts, getAllCategoriesProducts, manualSync };