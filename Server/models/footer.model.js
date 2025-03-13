const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    items: {
        type: [
            {
                type: String,
                required: true, // Ensures individual items are non-empty strings
            }
        ],
        required: true, // Ensures the array itself is required
        validate: {
            validator: function (arr) {
                return Array.isArray(arr) && arr.length > 0;
            },
            message: "Items must be a non-empty array of strings",
        },
    },
}, { strict: true });

const Footer = mongoose.model("Footer", FooterSchema);
module.exports = { Footer };
