const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: "Firstname is required" }, 
    lastName: { type: String, required: "Lastname is required"},
    email: { type: String, required: "Email is required", unique: true },
    city: { type: String, required: true },
    gender: {
        type: String,
        required: true,
        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },
    age: { type: Number, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("User", userSchema);