const router = require("express").Router();
const User = require("../Modals/User");

//Register a user
router.post("/register",async(req,res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(e){
        res.status(500).json(e);
    }
})




//Login a user

module.exports = router