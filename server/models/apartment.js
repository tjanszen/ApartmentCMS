'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    photo: String,
    numRooms: Number,
    roomPrice: Number,
    desc: String,
    sqrFeet: Number,
    tenants:[{type: mongoose.Schema.ObjectId, ref: 'Tenant'}]

});

module.exports = mongoose.model('Apartment', apartmentSchema);
