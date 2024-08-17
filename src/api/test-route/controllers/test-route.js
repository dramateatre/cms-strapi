'use strict';

/**
 * test-route controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-route.test-route');
