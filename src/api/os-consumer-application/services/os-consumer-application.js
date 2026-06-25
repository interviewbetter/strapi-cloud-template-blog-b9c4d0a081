'use strict';

/**
 * os-consumer-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-consumer-application.os-consumer-application');
