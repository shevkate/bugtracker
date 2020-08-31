const {Router} = require('express');
const User = require('../mongo_models/User');
const router = Router();

// /api/authent/register
router.post('/signup', async (req, res) => {
    try {
        const {name, email, password} = req.body
    }catch(e){
        res.status(500).json({message: 'Something went wrong!'})
    }



});

router.post('/signin', async (req, res) => {
    try {
        const {name, email, password} = req.body
    }catch(e){
        res.status(500).json({message: 'Something went wrong!'})
    }



});