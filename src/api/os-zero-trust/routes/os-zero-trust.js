'use strict';

/**
 * os-zero-trust router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::os-zero-trust.os-zero-trust');
