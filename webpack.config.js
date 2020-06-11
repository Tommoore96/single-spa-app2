const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "i6",
    projectName: "test2",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
