'use strict';

/**
 * os-cmmc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-cmmc.os-cmmc');
