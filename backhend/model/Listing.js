const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    title: String,
    price: String,
    locality: String,
    details: String
});
module.exports = mongoose.model("listing", dataSchema);