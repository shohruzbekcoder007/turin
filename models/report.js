const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    counterName: {
        type: String, 
        required: true 
    },
    counterId: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    previousSample: {
        type: Number,
        required: true
    },
    currentSample: {
        type: Number,
        required: true
    },
    totalKwh: {
        type: Number,
        required: true
    },
    fixedTariff: {
        type: Number,
        required: true
    },
    kwhTariff: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
});

const Report = mongoose.model("reports", ReportSchema);
module.exports.Report = Report;