const mongoose = require("mongoose")

const featuresSchema = new mongoose.Schema({
    icon: { type: String, required: true, default: "" },
    title: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" }
}, { strict: true })

const Features = mongoose.model("Features", featuresSchema)

module.exports = { Features }