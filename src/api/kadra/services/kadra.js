'use strict';

/**
 * kadra service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kadra.kadra');
