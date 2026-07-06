'use strict';

/**
 * fb-hipaa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fb-hipaa.fb-hipaa');
