'use strict';

var Apartment = require('../../models/apartment');
var active = require('../../views/helpers/active');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId}, function(err, apartment) {
      Tenant.find({hasRented: false}, function(err, tenants) {
        console.log(apartment.tenants.length + apartment.numRooms);
        reply.view('templates/apartments/show', {path:'/apartments', active:active, apartment:apartment, tenants:tenants});
      })
    });
  }
};
