'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

module.exports = {
  afterFetchAll: async (model, response, options) => {
    console.log('After Fetch ...');
    console.log(response);
  }
};
