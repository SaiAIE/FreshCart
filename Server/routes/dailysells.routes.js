const express = require("express")

const {createDailySell,getAllDailySell,getDailySellById,updateDailySell,deleteDailySell} = require("../controllers/dailySells.controller")

const router = express.Router();

router.post("/",createDailySell)
router.get("/",getAllDailySell)
router.get("/:id",getDailySellById)
router.put("/:id",updateDailySell)
router.delete("/:id",deleteDailySell)

module.exports = router