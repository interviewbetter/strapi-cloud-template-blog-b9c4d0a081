'use strict';

/**
 * os-cmmc router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::os-cmmc.os-cmmc');
