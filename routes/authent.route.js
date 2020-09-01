const {Router} = require('express');
const User = require('../mongo_models/User');
const router = Router();

// register route
router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body
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