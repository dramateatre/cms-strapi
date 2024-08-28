'use strict';

/**
 * box-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::box-office.box-office');
