const express = require("express")

const {createFeature,getAllFeatures,getFeatureById,updateFeature,deleteFeature} = require("../controllers/features.controller")

const router = express.Router();

router.post("/",createFeature)
router.get("/",getAllFeatures)
router.get("/:id",getFeatureById)
router.put("/:id",updateFeature)
router.delete("/:id",deleteFeature)

module.exports = router