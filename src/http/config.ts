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

export function logVersion() {
  const styles = [
    "font-size: 15px; font-weight: bold",
    "font-size: 15px; color: #007aff"
  ];

  console.log(`%c BUILD: %c${config.versionBuild}`, styles[0], styles[1]);
  console.log(`%c HASH:  %c${config.versionHash}`, styles[0], styles[1]);
  console.log(`%c TIME:  %c${config.buildTime}`, styles[0], styles[1]);
}
