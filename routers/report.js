const express = require('express');
const router = express.Router();

const { ReportClass } = require('./../classes/report_class');

const Report = new ReportClass();

router.get('/all', async (req,res) => {
    let result = await Report.elementsAll(req);
    res.send(result);
});

router.get('/element_all', async (req,res) => {
    let result = await Report.allElementsSelectOption();
    res.send(result);
});

router.post('/create', async (req,res) => {
    let result = await Report.createElement(req);
    res.send(result);
});

router.get('/find', async (req,res) => {
    let result = await Report.elementOne(req);
    res.send(result);
});

router.delete('/delete', async (req,res) => {
    let result = await Report.elementDelete(req);
    res.send(result);
});

router.put('/update', async (req,res) => {
    let result = await Report.elementUpdate(req);
    res.send(result);
});

module.exports = router;