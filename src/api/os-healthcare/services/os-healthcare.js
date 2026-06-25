'use strict';

/**
 * os-healthcare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-healthcare.os-healthcare');
