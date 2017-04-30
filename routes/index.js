var express = require("express");
var router  = express.Router();
var passport = require("passport");
/*var User = require("../models/user");*/
var middleware = require("../middleware");

// root route
//--- Landing Page-->GET
router.get("/", function(req,res){
    res.render("landing");
});

//---Tentang Merangkak
router.get("/about", function(req, res){
	res.render("about");
});

//middleware -- (moved to /v10/middleware/index.js)

module.exports = router;