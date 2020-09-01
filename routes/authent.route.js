const {Router} = require('express');
const User = require('../mongo_models/User');
const router = Router();
const bcrypt = require('bcryptjs');
const {check, validationResult } = require('express-validator');


// register route
router.post('/register',

    [
        check('name', 'Provide valid name').not().isEmpty(),
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Password minimum length is 8 symbols').isLength({min:8})
    ],

    async (req, res) => {
    try {
        const result = validationResult(req);
        const hasErrors = !result.isEmpty();
        if (hasErrors) {
            return res.status(400).json({errors: result.array(),
                message: 'Invalid data while registration!'})
        }

        const {name, email, password} = req.body;

        const applicantUser = await User.findOne({email:email});

        if (applicantUser) {
           return  res.status(400).json({message: 'This user already exists!'})
        }

        const cryptedPassword = bcrypt.hash(password, 5);
        const user = new User({name:name, email:email, password:cryptedPassword});

        await user.save();

        res.status(201).json({message: 'User has been created'})

    }catch(e){
        res.status(500).json({message: 'Something went wrong!'})
    }


});

router.post('/login', async (req, res) => {
    try {
        const {name, email, password} = req.body
    }catch(e){
        res.status(500).json({message: 'Something went wrong!'})
    }



});