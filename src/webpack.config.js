const path = require('path');

module.exports = {
  // ... other webpack configurations ...

  resolve: {
    fallback: {
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
    },
  },

  // ... other webpack configurations ...
};
