const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});


app.get("/data", function(req, res){
    res.render("data.html");
});


app.get("/application", function(req, res){
    res.render("application.html");
});

app.get("/storage", function(req, res){
    res.render("storage.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});

