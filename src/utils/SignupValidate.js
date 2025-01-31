const validator = require("validator")

function SignupValidate(user){
    if(!user.firstName || !user.lastName ){
        throw new Error("First and Last name is required");
    } else if( !validator.isEmail(user.email)) {
        throw new Error("Email is not vaild");
    } else if( !validator.isStrongPassword(user.password)) {
        throw new Error("password is not strong");
    }
} 

module.exports = { SignupValidate }