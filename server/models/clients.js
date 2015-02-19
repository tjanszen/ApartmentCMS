'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: String,
  photo: String,
  renting: {type: Boolean, default: false},
  leaseMonths: Number
});

module.exports = mongoose.model('Client', clientSchema);
