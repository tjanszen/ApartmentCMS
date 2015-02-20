'use strict';

var Tenant = require('../../models/tenant');
var active = require('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    Tenant.findOne({_id:request.params.tenantId},function(err, tenant) {
      reply.view('templates/tenants/edit', {path:'/tenants', active:active, tenant:tenant});
    });
  }
};
