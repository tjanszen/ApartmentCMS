'use strict';

var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    var tenant = new Tenant(request.payload);
    console.log(tenant);
    tenant.save(function() {
      reply.redirect('/tenants');
    });
  }
};
