'use strict';

/**
 * ib-academy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ib-academy.ib-academy');
