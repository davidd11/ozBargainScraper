var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bargainScraper    = require('./bargainScraper');



//routes
var indexRoutes = require('./routes/index.js');

var url = process.env.DATABASEURL || "mongodb://localhost:27017/ozbargain_scraper"
// mongoose.connect(url, {useNewUrlParser: true});
mongoose.connect(url, {useMongoClient: true});

app.set("view engine", "ejs");

bargainScraper();

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});
