const express = require("express")

const {extractAndStoreCategoryProducts,getAllCategoriesProducts, manualSync} = require("../controllers/productsCategories.controller")

const router = express.Router();

router.post("/",extractAndStoreCategoryProducts)
router.get("/",getAllCategoriesProducts)
router.get("/sync",manualSync)

module.exports = router