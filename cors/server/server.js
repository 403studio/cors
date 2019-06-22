var express = require("express");
var cors = require("cors");
var app = express();

//使用express的cors中间件使其支持跨域请求
app.use(cors());

app.get("/", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3000, function() {
  console.log("CORS-enabled web server listening on port 3000");
});
