var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var Testimony = require('./components/hero/testimonies/testimony.model');
var Gram = require('./components/photoFeed/gram.model');
var Hero = require('./components/hero/hero.model');
var Cred = require('./components/credentials/cred.model');
var Perk = require('./components/perks/perk.model');
var PhotoFeed = require('./components/photoFeed/photoFeed.model');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('home', { 
        hero : getHero(), 
        creds : getCreds(), 
        perk : getPerk(), 
        photoFeed : getPhotoFeed()
    });
});


function getTestimonies(){
    return [
        new Testimony('https://i.imgur.com/LsfKVOg.png', 'smart, cool and ready to prove it', 'Khoa, Lead Product Manager', true),
        new Testimony('https://i.imgur.com/szZtjBV.png', 'it\'s a new day, learn something', 'Alyssa, Sales Manager', false),
        new Testimony('https://i.imgur.com/7ciuq1P.png', 'we\'re growing fast, and so can you', 'Ravin, Director of Development', true)
    ];
}

function getGrams(){
    return [
        new Gram('https://images.unsplash.com/photo-1498622205843-3b0ac17f8ba4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a93cb0b8a2f6a5da8d1acba7d337db33&auto=format&fit=crop&w=750&q=80', 'Caption of image 1'),  
        new Gram('https://images.unsplash.com/photo-1490030327837-eab3c250898d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4103f22914456914a698a5ee80a133f3&auto=format&fit=crop&w=750&q=80', 'Caption of image 2'),  
        new Gram('https://images.unsplash.com/photo-1498622429433-bbb22b92ee02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfea5f4bae9d48800b7a85cf4669a704&auto=format&fit=crop&w=750&q=80', 'Caption of image 3'),  
        new Gram('https://images.unsplash.com/photo-1498622205843-3b0ac17f8ba4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a93cb0b8a2f6a5da8d1acba7d337db33&auto=format&fit=crop&w=750&q=80', 'Caption of image 1'),  
        new Gram('https://images.unsplash.com/photo-1490030327837-eab3c250898d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4103f22914456914a698a5ee80a133f3&auto=format&fit=crop&w=750&q=80', 'Caption of image 2'),  
        new Gram('https://images.unsplash.com/photo-1498622429433-bbb22b92ee02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfea5f4bae9d48800b7a85cf4669a704&auto=format&fit=crop&w=750&q=80', 'Caption of image 3'),
        new Gram('https://images.unsplash.com/photo-1498622205843-3b0ac17f8ba4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a93cb0b8a2f6a5da8d1acba7d337db33&auto=format&fit=crop&w=750&q=80', 'Caption of image 1'),  
        new Gram('https://images.unsplash.com/photo-1490030327837-eab3c250898d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4103f22914456914a698a5ee80a133f3&auto=format&fit=crop&w=750&q=80', 'Caption of image 2')
    ];
}

function getHero(){
    return new Hero(
        'https://i.imgur.com/qp46gnX.png', 
        'My perfect job is...', 
        'Realize <span style="font-style: italic; font-size: 98%">your</span> <br> p<a href="#"><i style="font-size: 88%" class="fa fa-play-circle"></a></i>tential',
        'cloud-based applications to recruit, train, manage,<br> and connect people across your organization.',
        getTestimonies()
    )
}

function getCreds(){
    return [
        new Cred('http://blog.centrify.com/wp-content/uploads/2015/12/LOGO.png'),
        new Cred('https://www.greatplacetowork.com/images/logos/BEST_COMPANIES_LOGO_2017.png'),
        new Cred('http://about.mountainhub.com/wp-content/uploads/2016/11/BestPlacestoWork_logo_2016.png')
    ]
}

function getPerk(){
    return new Perk(
        'the culture', 
        'Perks of a Lifetime', 
        'Lorem ipsum dolor amet af palo santo try-hard meditation VHS next level swag. Put a bird on it williamsburg mixtape listicle, poutine heirloom freegan swag hot chicken cred kickstarter four loko stumptown quinoa. Intelligentsia hoodie man bun occupy XOXO pop-up exercitation pug.',
        'https://images.unsplash.com/photo-1459258350879-34886319a3c9?ixlib=rb-0.3.5&s=43e6758dda592fbfdf6b77e04975b685&auto=format&fit=crop&w=1027&q=80',
        'https://images.unsplash.com/photo-1514321648849-f4e1d5da98dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b8c51e37016e3c26e1ddf15af47d15d4&auto=format&fit=crop&w=893&q=80',
        'https://images.unsplash.com/photo-1508968904927-1833f9238a8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0146f783364ebcbf45089a0c5a7c83ad&auto=format&fit=crop&w=967&q=80'
    )    
}

function getPhotoFeed(){
    return new PhotoFeed(
        'our culture',
        'A Family Named Cornerstone',
        getGrams()
    )
}

const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log("Listening on ${ PORT }");
});
