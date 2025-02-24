const express = require("express")

const {createFooter,getAllFooter,getFooterById,updateFooterr,deleteFooter} = require("../controllers/footer.controller")

const router = express.Router();

router.post("/",createFooter)
router.get("/",getAllFooter)
router.get("/:id",getFooterById)
router.put("/:id",updateFooterr)
router.delete("/:id",deleteFooter)

module.exports = router