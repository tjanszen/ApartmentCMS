'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    photo: String,
    numRooms: Number,
    numVacant: Number,
    numRented:Number,
    roomPrice: Number,
    description: String,
    isFull: {type: Boolean, default: false}
});

module.exports = mongoose.model('Apartment', apartmentSchema);
