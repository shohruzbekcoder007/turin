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
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
});

const Location = mongoose.model("locations", LocationSchema);
module.exports.Location = Location;