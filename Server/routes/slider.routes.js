const express = require("express")

const {createSlider,getAllSlider,getSliderById,updateSlider,deleteSlider} = require("../controllers/slider.controller.js")

const router = express.Router();

router.post("/",createSlider)
router.get("/",getAllSlider)
router.get("/:id",getSliderById)
router.put("/:id",updateSlider)
router.delete("/:id",deleteSlider)

module.exports = router