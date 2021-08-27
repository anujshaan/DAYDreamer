const router = require("express").Router();
const User = require("../Modals/User");
const bcrypt = require("bcrypt");

//Register a user
router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(e){
        res.status(500).json(e);
    }
})

//Login a user
router.post("/login",async(req,res)=>{
    try{
        const username = req.body.username;

    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router