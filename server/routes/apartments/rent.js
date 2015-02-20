'use strict';

var Apartment = require('../../models/apartment');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    // console.log('tommy', request.params, request.payload);
      Apartment.findById(request.params.apartmentId, function(err, apartment) {
        Tenant.findById(request.payload.tenantId, function(err, tenant) {
          tenant.unit.push(apartment._id);
          tenant.hasRented = true;
          apartment.tenants.push(tenant._id);
          tenant.save(function() {
            apartment.save(function() {
              reply.redirect('/tenants/' + tenant._id)
            })
          })
        })
      })
  }
};
