const {Router} = require('express');
const User = require('../mongo_models/User');
const router = Router();
const bcrypt = require('bcryptjs');
// register route
router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const applicantUser = User.findOne({email:email});

        if(applicantUser) {
           return  res.status(400).json({message: 'This user already exists!'})
        }

        const cryptedPassword = bcrypt.hash(password, 5);


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