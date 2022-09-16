const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Mohitisagoodb$y';
//  Create a User using: POST  "/api/auth/createuser". No login required


router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    // If there are error, return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check whethe the user with this email exists already


        let user = await User.findOne({ email: req.body.email });
        // console.log(user); //(output:-null means user exist nahi krta.)
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });

        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data);//userid comes from database,conform krne klye log kiya taki sure ho ki data me user id he ari hai user ki.
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        // res.json(user)
        // res.json({ authToken})
        res.json({ authToken, user })

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//  Aunthenticate User usingusing: POST  "/api/auth/login". No login required

router.post('/login', [

    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters').exists(),

], async (req, res) => {
    // If there are error, return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        console.log(user);//(output:-null means email exist nahi krti.if (!user)  means email nahi hai toh ye kro)
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data);//userid comes from database,conform krne klye log kiya taki sure ho ki data me user id he ari hai user ki.
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
module.exports = router;