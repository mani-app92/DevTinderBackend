
const mongoose = require("mongoose");

const connectDatabase = async () => {
    await mongoose.connect("mongodb+srv://LearnNode:jNTBIMh1HQ1ohu8O@learnnodejs.kpqog.mongodb.net/devTinder")
}

module.exports = { connectDatabase };