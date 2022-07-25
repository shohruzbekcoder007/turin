const express = require('express');
const router = express.Router();

const { CounterClass } = require('./../classes/counter_class');

const Counter = new CounterClass();

router.get('/all', async (req,res) => {
    let result = await Counter.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Counter.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Counter.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Counter.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Counter.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Counter.elementUpdate(req);
    res.send(result);
});

module.exports = router;