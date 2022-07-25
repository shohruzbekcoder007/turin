const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth')

const { User } = require('./../models/user')

router.get('/', async (req,res) => {
    return res.render('login', {

    });
});

router.post('/', async (req,res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).send('Email yoki parol noto\'g\'ri');
    
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword)
        return res.status(400).send('Email yoki parol noto\'g\'ri');

    const token = user.generateAuthToken();
    res.cookie("token", token, {
        httpOnly: true,
        // secure: true,
        // maxAge: 1000000,
        // signed: true
    })
    return res.render('basic', {

    });
})

router.get('/user', async (req,res) => {
    return res.render('basic', {

    });
})


module.exports = router;