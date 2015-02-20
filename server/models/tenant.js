'use strict';

var mongoose = require('mongoose');

var tenantSchema = mongoose.Schema({
  name: String,
  photo: String,
  email: String,
  age: Number,
  gender: String,
  hasRented: {type: Boolean, default: false},
  unit: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}],
  leaseMonths: Number
});

module.exports = mongoose.model('Tenant', tenantSchema);
