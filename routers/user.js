const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { UserClass } = require('./../classes/user_class');

const User = new UserClass();

// let req = {};
// req.body = {}
// req.body = {
//     firstName: "student",
//     lastName: "student",
//     password: "password",
//     email: "student@gmail.com",
//     phone: "908761234",
//     role: 1
// }
// async function once(){const salt = await bcrypt.genSalt();
//     req.body.password = await bcrypt.hash(req.body.password, salt);
//     let result = await User.createElement(req);
//     console.log(result)}
// once();

router.get('/all', async (req,res) => {
    let result = await User.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await User.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
    let result = await User.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await User.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await User.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await User.elementUpdate(req);
    res.send(result);
});

module.exports = router;