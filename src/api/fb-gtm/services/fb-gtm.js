'use strict';

/**
 * fb-gtm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fb-gtm.fb-gtm');
