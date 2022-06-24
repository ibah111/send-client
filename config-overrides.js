const path = require("path");
const fs = require("fs").promises;
const s = require("semver");
const gitSemverTags = require("git-semver-tags");
const gitGet = () =>
  new Promise((resolve) => {
    gitSemverTags({ tagPrefix: "v" }, (err, result) => {
      const tags = result.map((value) => s.clean(value));
      resolve(tags[0]);
    });
  });
const prepare = async () => {
  const tag = await gitGet();
  await fs.writeFile("./src/utils/.version.js", `module.exports = "${tag}";`);
};
prepare();
module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      config.plugins.find((value) => value.userOptions).userOptions.filename =
        "index.php";
      config.module.rules
        .find((value) => value.oneOf)
        .oneOf.find((value) => value.type === "asset/resource")
        .exclude.push(/\.php$/);
    }
    return config;
  },
  paths: (paths, env) => {
    switch (env) {
      case "production":
        paths.appPublic = path.resolve(__dirname, "public/prod");
        paths.appHtml = path.resolve(__dirname, "public/prod/index.php");
        break;
      case "development":
        paths.appPublic = path.resolve(__dirname, "public/dev");
        paths.appHtml = path.resolve(__dirname, "public/dev/index.html");
        break;
    }
    return paths;
  },
};
