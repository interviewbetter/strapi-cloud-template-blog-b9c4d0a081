'use strict';

/**
 * os-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-about.os-about');
