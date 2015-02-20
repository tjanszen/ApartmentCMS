'use strict';

var Apartment = require('../../models/apartment');
var active = require('../../views/helpers/active');
var Tenant = require('../../models/tenant');


module.exports = {
  handler: function(request, reply) {
    Apartment.find(function(err, apartments) {
      Tenant.find(function(err, tenants) {
        var data = {totalRev: 0, roomsOcup: 0, roomsVac: 0, apartOpen: 0};
        apartments.forEach(function(a) {
          data.totalRev += a.tenants.length * a.roomPrice;
          data.roomsOcup += a.tenants.length;
          data.roomsVac += a.numRooms = a.tenants.length;
          if(a.tenants.length !== a.numRooms) {
            data.apartOpen++;
          }
        })
        reply.view('templates/admin/index', {path:'/admin', active:active, apartments:apartments, tenants:tenants, data:data});
      })
    });
  }
};
