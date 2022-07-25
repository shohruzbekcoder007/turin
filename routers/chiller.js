const express = require('express');
const router = express.Router();

const { ChillerClass } = require('./../classes/chiller_class');

const Chiller = new ChillerClass();

router.get('/all', async (req,res) => {
    let result = await Chiller.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Chiller.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Chiller.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Chiller.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Chiller.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Chiller.elementUpdate(req);
    res.send(result);
});

module.exports = router;