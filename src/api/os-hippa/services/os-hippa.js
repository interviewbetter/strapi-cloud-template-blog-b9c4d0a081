'use strict';

/**
 * os-hippa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-hippa.os-hippa');
