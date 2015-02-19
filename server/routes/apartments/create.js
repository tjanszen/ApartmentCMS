'use strict';

var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    console.log('got here')
    var apartment = new Apartment(request.payload);
    apartment.save(function() {
      reply.redirect('/apartments');
    });
  }
};
