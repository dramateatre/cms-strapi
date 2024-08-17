'use strict';

/**
 * test-route router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-route.test-route');
