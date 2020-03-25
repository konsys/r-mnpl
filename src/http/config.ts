export const configs = {
  production: {
    baseURL: window.location.origin,
    versionHash: "%VERSION_HASH%",
    versionBuild: "%VERSION_BUILD%",
    buildTime: "%BUILD_TIME%"
  },
  development: {
    baseURL: "http://localhost:3001",
    versionHash: "%VERSION_HASH%",
    versionBuild: "%VERSION_BUILD%",
    buildTime: "%BUILD_TIME%"
  }
};

// @ts-ignore
export const config = configs[process.env.NODE_ENV];
