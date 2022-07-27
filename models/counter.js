const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    i1: {
        type: Number,
        required: true,
    },
    i2: {
        type: Number,
        required: true,
    },
    i3: { 
        type: Number, 
        required: true 
    },
    n_v1: { 
        type: Number,
        required: true
    },
    n_v2: { 
        type: Number,
        required: true
    },
    n_v3: { 
        type: Number,
        required: true
    },
    v1_v2: { 
        type: Number,
        required: true
    },
    v1_v3: { 
        type: Number,
        required: true
    },
    v2_v3: { 
        type: Number,
        required: true
    },
    cos: { 
        type: Number,
        required: true
    },
    counterName: { 
        type: String,
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

const Counter = mongoose.model("counters", CounterSchema);
module.exports.Counter = Counter;