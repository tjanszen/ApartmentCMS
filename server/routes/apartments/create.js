'use strict';

var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    var apartment = new Apartment(request.payload);
    console.log(apartment);
    apartment.save(function() {
      reply.redirect('/apartments');
    });
  }
};
