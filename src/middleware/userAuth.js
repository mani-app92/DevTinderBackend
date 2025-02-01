const jwt = require("jsonwebtoken");
const userModel = require("../models/user.js");

const userAuth = async (req, res, next) => {
    try{
        const getToken = req.cookies.token;
        if(!getToken){
            throw new Error("Token is expired");
        }
        const decodedToken = await jwt.verify(getToken, "DevTinder@2025");
        const { _id } =  decodedToken;
        const getUser = await userModel.findById(_id).exec();
        if(!getUser){
            throw new Error("user not found")
        }
        req.user = getUser;
        next();
    } catch(err){
        res.status(400).send({
            status: "error",
            message: err.message
        })
    }
}

module.exports = userAuth;