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

app.get("/searchResults", function(req, res) {
    var coin = req.query.search.toLowerCase();
    var data, price, trend;

    request('https://api.coinmarketcap.com/v1/ticker/' + coin + '/?convert=USD', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            data = JSON.parse(body);
            price = data[0]["price_usd"].toLowerCase();
            trend = data[0]["percent_change_7d"];
            res.render('searchResults', { price: price, coin: coin, trend: trend });
        }
        else {
            res.render('errorPage');
        }
        
    });

});

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log("Listening on ${ PORT }");
});
