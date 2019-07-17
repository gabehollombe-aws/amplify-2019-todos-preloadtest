module.exports = {
    "extends": "react-app",
    env: {
      jest: true,
    },
    globals: {
      page: true,
      browser: true,
      context: true,
      jestPuppeteer: true,
      SERVER_PATH: true,
    },
}