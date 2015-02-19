'use strict';

// var Client = require('../../models/client');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/tenants/index', {path:'/tenants', active:active});
  }
};
