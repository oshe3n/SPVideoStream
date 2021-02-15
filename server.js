
var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname+'/index.html'));
});


const port = process.env.PORT || 3000;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
