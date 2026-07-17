'use strict';

/**
 * os-global-presence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::os-global-presence.os-global-presence');
