var express = require('express');
var parser = require('body-parser');
var posts = require('./db.json');
var app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/posts", (req, res)=>{
  console.log(posts.length)
  res.send(posts)
});

app.post("/posts", (req, res)=>{
  posts.push(req.body);
  res.send(posts)
});

app.listen(8000, ()=>{
  console.log("heard on port 8000")
})
