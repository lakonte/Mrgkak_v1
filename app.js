var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride  = require("method-override");
/*    Merangkak  = require("./models/merangkak");*/
/*    Comment     = require("./models/comment"),*/
/*    User        = require("./models/user"),*/
/*    seedDB      = require("./seeds");*/

//requiring routes
/*var commentRoutes       = require("./routes/comments"),*/
var merangkakRoutes    = require("./routes/merangkak"),
	indexRoutes         = require("./routes/index")

/*mongoose.connect("mongodb://localhost/yelp_camp_v6");*/
/*mongoose.connect("mongodb://localhost:27017/merangkak_v1"); //27017 is default port setup after installing mongodb!*/
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
/*app.use(require("express-session")({
    secret: "Doraemon adalah tokoh fiktif kartun yang suka dorayaki",
    resave: false,
    saveUninitialized: false
}));*/

// default line to use passport!
/*app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
/*app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});
*/
app.use("/", indexRoutes);
app.use("/merangkak", merangkakRoutes);
/*app.use("/merangkak/:id/comments", commentRoutes);*/


/*
app.listen(process.env.PORT, process.env.IP, function(){*/
app.listen(1337, '127.0.0.1', function(){
    console.log("Merangkak Server Has Started!!!");
});
