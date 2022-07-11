module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-trove`
  extends: ["trove"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
