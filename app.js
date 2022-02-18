const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var request = require('request');
var httpproxy;
var socks4proxy;
var socks5proxy;
var myip;
var ipurl = "https://api.ipify.org/?format=json";
var httpurl = "https://zenum.io/proxylist?format=txt&start=10500&q=500";
var socks4url = "https://api.proxyscrape.com/?request=getproxies&proxytype=socks4&timeout=10000&country=all";
var socks5url = "https://api.proxyscrape.com/?request=getproxies&proxytype=socks5&timeout=10000&country=all";
let settings = { method: "Get" };
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render("index");
});


app.get('/ip',function(req,res){

    request(ipurl, (error, res, body) => {
        if (error) {
            return  console.log(error)
        };
    
        if (!error && res.statusCode == 200) {
            myip = body;// do something with JSON, using the 'body' variable
        };
    });
    res.send(myip);
    
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





