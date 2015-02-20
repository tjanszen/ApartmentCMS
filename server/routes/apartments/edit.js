'use strict';

var Apartment = require('../../models/apartment');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId},function(err, apartment) {
      reply.view('templates/apartments/edit', {path:'/apartments', active:active, apartment:apartment});
    });
  }
};
