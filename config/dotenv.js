module.exports = function (env) {
  return {
    clientAllowedKeys: ['STRIPE_KEY'],
    path: '.env',
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};