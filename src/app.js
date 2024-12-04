const express = require("express");
const app = express();
const { connectDatabase } = require("./config/database.js");
const UserModel = require("./models/user.js");

app.use(express.json());
app.use(express.urlencoded());

app.post("/signup", async (req, res) => {
    console.log("req", req.body);
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        gender: req.body.gender,
        age: req.body.age,
        password: req.body.password
    }
    const userModelObj =  new UserModel(userData);
    await userModelObj.save();
    res.send("User Added Successfully!!")
})

connectDatabase().then(() => {
    console.log("Database is connected!!! ")
    app.listen(8000, () => {
        console.log("Your Server is successfully listening on port 8000")
    });
}).catch(() => {
    console.log("Database is not connected!!! ")
})