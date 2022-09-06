const express = require("express");
const userController = require('../controllers/users');
const router = express.Router();

//Login
router.get(["/","/login"], (request,response) =>{
    // res.send("<h1>Hello World!</h1>");
    response.render('login');
});

//Register
router.get("/register", (request,response) =>{
    response.render('register');
});

//Home
router.get("/home", userController.isLoggedIn,(req,res) =>{
    if(req.user){
        res.render("home",{user:req.user});
    }else{
        res.redirect("/login");
    }
    //console.log(req.name);
    
});

//Profile
router.get("/profile", userController.isLoggedIn,(req,res) =>{
    if(req.user){
        res.render("profile",{user: req.user});
    }else{
    res.redirect("/login");
    }
});


module.exports = router;