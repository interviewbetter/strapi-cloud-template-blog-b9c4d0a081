'use strict';

/**
 * os-zero-trust controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::os-zero-trust.os-zero-trust');
