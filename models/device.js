const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: true,
    },
    host: {
        type: Number,
        required: true,
    },
    port: {
        type: Number, 
        required: true 
    },
    deviceType: {
        type: Number,
        required: true
    },
    isAlive: {
        type: Boolean,
        required: true
    },
    locationId: {
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

const Device = mongoose.model("devices", DeviceSchema);
module.exports.Device = Device;