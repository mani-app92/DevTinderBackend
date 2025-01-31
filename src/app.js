const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { connectDatabase } = require("./config/database.js");
const UserModel = require("./models/user.js");
const { SignupValidate } = require("./utils/SignupValidate.js");

app.use(express.json());
app.use(express.urlencoded());

app.post("/signup", async (req, res) => {
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        city: req.body.city,
        gender: req.body.gender,
        age: req.body.age,
        password: req.body.password
    }
    try{

        SignupValidate(userData);

        const hashPassword = bcrypt.hashSync(userData.password, 10);
        const userModelObj =  new UserModel({ ...userData, password: hashPassword });
        await userModelObj.save();
        res.send({
            status: "success",
            message: "User Added Successfully!!"
        })
    } catch(err) {
        res.status(400).send({
            status: "error",
            message: err.message
        })
    }
})

app.post("/login", async (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    try{
        
        const user = await UserModel.findOne({ email: userData.email })
        if(!user){
            throw new Error("Invalid credentials")
        }

        const match = await bcrypt.compare(userData.password, user.password);
        if(!match){
            throw new Error("Invalid credentials")
        }
        res.send({
            status: "success",
            message: "Login Successfully!!!"
        })
    } catch(err) {
        res.status(400).send({
            status: "error",
            message: err.message
        })
    }
})

app.get("/feed", async (req, res) => {
    const feedList = await UserModel.find({});
    console.log("feedList", feedList);
    res.send(feedList)
})

connectDatabase().then(() => {
    console.log("Database is connected!!! ")
    app.listen(8000, () => {
        console.log("Your Server is successfully listening on port 8000")
    });
}).catch(() => {
    console.log("Database is not connected!!! ")
})