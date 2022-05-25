const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
// get the products data
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        console.log("Data Found" + productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});


// get individual data

router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);

        const individualdata = await Products.findOne({ id: id });

        // console.log(individualdata + "individual data");

        res.status(201).json(individualdata);

    } catch (error) {

        res.status(400).json(individualdata);
        console.log("error" + error.message);

    }
});


//register data

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Fill All Details" });
        console.log("No data available!");
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email already exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password does not match" })
        } else {

            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });

            //hashing

            const storedata = await finalUser.save();
            console.log(storedata);
            
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(422).send(error);
    }

});
// Login user API
router.post("/login",async(req,res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).json({error:"fill up all the data"})
    };
    try{
        const userlogin = await USER.findOne({email:email});
        console.log(userlogin+"user value");

        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            console.log(isMatch);

            if(!isMatch){
                res.status(400).json({error:"invalid details"})
            }else{
                res.status(201).json({message:"password match"})
            }
        }
    }catch (error){
        res.status(400).json({error:"invalid details"})
    }
})


module.exports = router;  