const express = require("express")

const {createGrocery,getAllGrocery,getGroceryById,updateGrocery,deleteGrocery} = require("../controllers/grocery.controller")

const router = express.Router();

router.post("/",createGrocery)
router.get("/",getAllGrocery)
router.get("/:id",getGroceryById)
router.put("/:id",updateGrocery)
router.delete("/:id",deleteGrocery)

module.exports = router