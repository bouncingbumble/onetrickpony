var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('home');
});

app.get("/search", function(req, res) {
    res.render("search");
});

app.get("/searchResults", function(req, res) {
    var coin = req.query.search.toLowerCase();
    var errorMsg = "";
    var data, price, trend;

    request('https://api.coinmarketcap.com/v1/ticker/' + coin + '/?convert=USD', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            price = data[0]["price_usd"].toLowerCase();
            trend = data[0]["percent_change_7d"];
        }
        else {
            errorMsg = "Sorry, that is not a valid coin.";
            console.log(errorMsg);
        }
        res.render('index', { price: price, coin: coin, trend: trend });
    });

});

app.get("/:coin", function(req, res) {
    var coin = req.params.coin.toLowerCase();
    var errorMsg = "";
    var data, price, trend;

    request('https://api.coinmarketcap.com/v1/ticker/' + coin + '/?convert=USD', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            price = data[0]["price_usd"];
            trend = data[0]["percent_change_7d"];
            res.render('index', { price: price, coin: coin, trend: trend });
        }
        else {
            errorMsg = "Sorry, that is not a valid coin.";
            res.send(errorMsg);
        }
        
    });

});

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log("Listening on ${ PORT }");
});
