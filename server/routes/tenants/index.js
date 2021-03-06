'use strict';

var Tenant = require('../../models/tenant');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Tenant.find(function(err, tenants) {
      reply.view('templates/tenants/index', {path:'/tenants', active:active, tenants:tenants});
    });
  }
};
