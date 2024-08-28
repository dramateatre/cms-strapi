'use strict';

/**
 * box-office router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::box-office.box-office');
