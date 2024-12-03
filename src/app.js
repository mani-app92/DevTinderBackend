const express = require("express");
const app = express();


app.get("/user/:id/:name", (req, res) => {
    console.log(req.params, req.query)
    res.send({ id: "fdsfdsnfvsdfs", firstName:"Manikandan", lastName: "velusamy" })
})



app.listen(8000, () => {
    console.log("Your Server is successfully listening on port 8000")
});