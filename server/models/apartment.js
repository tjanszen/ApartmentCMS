'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    photo: String,
    numRooms: Number,
    numRented: 0,
    roomPrice: Number,
    desc: String,
    isFull: {type: Boolean, default: false}
});

module.exports = mongoose.model('Apartment', apartmentSchema);
