const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    city: { type: String },
    gender: { type: String },
    age: { type: Number },
    password: { type: String }
})

module.exports = mongoose.model("User", userSchema);