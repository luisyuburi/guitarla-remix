/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  dev: {
    port: 3000,
  },
  devServerPort: 3000,
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true, // Provide a JSPM polyfill
      fs: "empty", // Provide an empty polyfill
    },
    globals: {
      Buffer: true,
    },
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};


