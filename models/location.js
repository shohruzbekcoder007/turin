const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    building: {
        type: Number,
        required: true
    },
    floor: {
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

const Location = mongoose.model("locations", LocationSchema);
module.exports.Location = Location;