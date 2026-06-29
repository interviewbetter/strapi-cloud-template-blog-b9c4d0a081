'use strict';

/**
 * os-zero-trust service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-zero-trust.os-zero-trust');
