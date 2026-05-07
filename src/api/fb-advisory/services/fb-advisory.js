'use strict';

/**
 * fb-advisory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fb-advisory.fb-advisory');
