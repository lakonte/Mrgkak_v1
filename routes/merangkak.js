var express = require("express");
var router  = express.Router();
var Merangkak  = require("../models/merangkak");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/", function(req, res){
    // Get all campgrounds from DB
    Merangkak.find({}, function(err, allMerangkak){
       if(err){
           console.log(err);
       } else {
/*           res.render("merangkak/index", {campgrounds: allMerangkak, currentUser: req.user});*/
           res.render("merangkak/index", {merangkak: allMerangkak});
       }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

module.exports = router;