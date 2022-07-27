const mongoose = require('mongoose');

const ChillerSchema = new mongoose.Schema({
    enteringWaterTemp: {
        type: Number,
        required: true,
    },
    leavingWaterTemp: {
        type: Number,
        required: true,
    },
    enteringGasTemp: {
        type: Number, 
        required: true 
    },
    leavingGasTemp: {
        type: Number,
        required: true
    },
    firstCircuitPressure: {
        type: Number,
        required: true
    },
    controlPoint: {
        type: Number,
        required: true
    },
    demandLimit: {
        type: Number,
        required: true
    },
    chillerState: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const Chiller = mongoose.model("chillers", ChillerSchema);
module.exports.Chiller = Chiller;