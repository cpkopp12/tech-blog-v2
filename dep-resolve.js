const { resolver } = require('resolve-package-json');
const pkg = require('./package-lock.json');
 
resolver(pkg.dependencies, function (err, result) {
  if (err) throw err;
 
  console.log(result);
});
