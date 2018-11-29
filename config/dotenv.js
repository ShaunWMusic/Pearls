module.exports = function (env) {
  return {
    clientAllowedKeys: ['STRIPE_TEST_KEY'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};