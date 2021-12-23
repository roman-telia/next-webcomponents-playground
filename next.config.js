// next.config.js
const withTM = require("next-transpile-modules")(["@teliads/components", "@stencil/core"]); 
// pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});
