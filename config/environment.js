/* eslint-env node */
'use strict';
module.exports = function(environment) {
  let ENV = {
    DS: {
    // localhost
    // host: 'http://localhost:3000',
    // Production API
      host: 'https://thawing-tor-75666.herokuapp.com',
    },
    modulePrefix: 'pearls-beard-oil',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    stripe: {
      key: process.env.STRIPE_KEY,
    },

    'ember-simple-auth': {
      authorizer: 'authorization:token'
    },

    'ember-simple-auth-token': {
      identificationField: 'email',
      passwordField: 'password',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      },
      refreshAccessTokens: false
    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV['ember-simple-auth-token'].serverTokenEndpoint = `${ENV.DS.host}/session`;


  return ENV;
};
