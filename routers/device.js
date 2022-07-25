const express = require('express');
const router = express.Router();

const { DeviceClass } = require('./../classes/device_class');

const Device = new DeviceClass();

router.get('/all', async (req,res) => {
    let result = await Device.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Device.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Device.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Device.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Device.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Device.elementUpdate(req);
    res.send(result);
});

module.exports = router;