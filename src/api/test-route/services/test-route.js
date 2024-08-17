'use strict';

/**
 * test-route service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-route.test-route');
