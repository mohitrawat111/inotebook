const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

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

    // Check whethe the user with this email exists already
    try {


        let user = await User.findOne({ email: req.body.email });
        // console.log(user); //(output:-null means user exist nahi krta.)
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exist" })
        }
        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
        res.json(user)
    } catch (error) {

        console.error(error.message);
        res.status(500).send("Some error occured");
    }


})
module.exports = router;