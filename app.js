const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var request = require('request');
var httpproxy;
var socks4proxy;
var socks5proxy;
var httpurl = "https://www.proxy-list.download/api/v1/get?type=http";
var socks4url = "https://www.proxy-list.download/api/v1/get?type=socks4";
var socks5url = "https://www.proxy-list.download/api/v1/get?type=socks5";
let settings = { method: "Get" };
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render("index");
});

app.get('/http',function(req,res){
    request(httpurl, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            httpproxy = body;// do something with JSON, using the 'body' variable
        };
    });
    res.send(httpproxy);
      
});

app.get('/socks4',function(req,res){
    request(socks4url, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            socks4proxy = body;// do something with JSON, using the 'body' variable
        };
    });
    res.send(socks4proxy);
      
});

app.get('/socks5',function(req,res){
    request(socks5url, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            socks5proxy = body;// do something with JSON, using the 'body' variable
        };
    });
    res.send(socks5proxy);
      
});


app.listen(PORT, function() {
    console.log("server active on port"+PORT);
});





