'use strict';

// var Apartment = require('../../models/apartment');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/apartments/index', {path:'/apartments', active:active});
  }
};
