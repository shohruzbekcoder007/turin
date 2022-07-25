const express = require('express');
const router = express.Router();

const { LocationClass } = require('./../classes/location_class');

const Location = new LocationClass();

router.get('/all', async (req,res) => {
    let result = await Location.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Location.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Location.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Location.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Location.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Location.elementUpdate(req);
    res.send(result);
});

module.exports = router;