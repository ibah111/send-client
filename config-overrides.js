const path = require('path');
const fs = require('fs').promises;
const s = require('semver');
const gitSemverTags = require('git-semver-tags');
const gitGet = () =>
  new Promise((resolve) => {
    gitSemverTags({ tagPrefix: 'v' }, (err, result) => {
      const tags = result.map((value) => s.clean(value));
      resolve(tags[0]);
    });
  });
const prepare = async () => {
  const tag = await gitGet();
  await fs.writeFile('./src/utils/.version.js', `module.exports = "${tag}";`);
};
prepare();
module.exports = {
  webpack: function (config, env) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, { path: require.resolve('path-browserify') });
    config.resolve.fallback = fallback;
    return config;
  },
};
