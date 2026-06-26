'use strict';

/**
 * os-construction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-construction.os-construction');
