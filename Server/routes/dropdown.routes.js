const express = require("express")
const {createDropdown,getAllDropdown,getDropdownById,updateDropdown,deleteDropdown} = require("../controllers/dropdown.controller")

const router = express.Router();

router.post("/",createDropdown)
router.get("/",getAllDropdown)
router.get("/:id",getDropdownById)
router.put("/:id",updateDropdown)
router.delete("/:id",deleteDropdown)

module.exports = router