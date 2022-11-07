const saveFile = require("fs").writeFileSync;
const pkgJsonPath =
  require.main.paths[1].split("node_modules")[0] + "package.json";
const json = require(pkgJsonPath);
if (json.hasOwnProperty("homepage")) {
  json.homepage = "https://taupe-dragon-84a2b5.netlify.app/";
}
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));