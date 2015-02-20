'use strict';

var mongoose = require('mongoose');

var tenantSchema = mongoose.Schema({
  name: String,
  photo: String,
  hasRented: {type: Boolean, default: false},
  unit: [{type: mongoose.Schema.ObjectId, ref: 'Tenant'}],
  leaseMonths: Number
});

module.exports = mongoose.model('Tenant', tenantSchema);
