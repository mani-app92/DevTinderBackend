const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Dashboard data is fetched successfully")
})
app.get("/test", (req, res) => {
    res.send("Your test data is loaded")
})
app.get("/hello", (req, res) => {
    res.send("Hello World data is loaded")
})
app.listen(8000, () => {
    console.log("Your Server is successfully listening on port 8000")
});