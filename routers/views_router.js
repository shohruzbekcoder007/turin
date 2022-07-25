const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
    if(user.role == 1)
        return res.render('basic');
    if(user.role == 2)
        return res.render('basic1');
    if(user.role == 3)
        return res.render('basic2');
    return res.render('login');
})

router.get('/user', cookieJwtAuth, async (req,res) => {
    if(req.user.role == 1)
        return res.render('basic');
    if(req.user.role == 2)
        return res.render('basic1');
    if(req.user.role == 3)
        return res.render('basic2');
    return res.render('login');
})

router.get('/location', cookieJwtAuth, async (req,res) => {
    if(req.user.role == 1)
        return res.render('location');
    if(req.user.role == 2)
        return res.render('location1');
    if(req.user.role == 3)
        return res.render('location2');
    return res.render('login');
})


module.exports = router;