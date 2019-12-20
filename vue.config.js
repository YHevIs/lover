const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  // https://cli.vuejs.org/zh/config/#configurewebpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
};
