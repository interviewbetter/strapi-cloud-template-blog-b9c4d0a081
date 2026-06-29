'use strict';

/**
 * os-compliance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-compliance.os-compliance');
