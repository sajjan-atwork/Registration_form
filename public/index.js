const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

//app.get(route,callback)
app.get("/", (req, res) => {
    res.send("<h1> Welocome To Login!!! </h1>");
    //res.write("Please enter your login credentials");
});
/*
app.get("/contact", (req, res) => {
    res.send("Hello world!!! this is amazing because my site is not crashing becuse of nodemon Sajjan rocks,contact!!!");

});
*/


app.listen(5000, () => {
    console.log("listening to port 5000");
});
