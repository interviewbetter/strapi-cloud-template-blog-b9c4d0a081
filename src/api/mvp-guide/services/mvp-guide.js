'use strict';

/**
 * mvp-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mvp-guide.mvp-guide');
