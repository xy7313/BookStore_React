// using use strict directive to make sure you receive an error, writing js need to specify "use strict", writing jsx, use strict is default
"use strict"
var express = require('express');
var app = express();
var path = require('path');

//middleware to define folder for strict files
app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'public','index.html'))
});

app.listen(3000,function(){
    console.log('listening 3000');
});

