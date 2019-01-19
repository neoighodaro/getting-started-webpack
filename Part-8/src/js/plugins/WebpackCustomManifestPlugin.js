const fs = require('fs');
const chalk = require('chalk');

class WebpackCustomManifestPlugin {
  constructor(options) {
    this.validateOptions(options);

    this.options = options;
  }

  validateOptions(options) {
    if (!options || !options.outputPath) {
      const msg = `Please specify an outputPath.`;
      throw new Error(console.log(chalk.bold.bgRed('Error:'), chalk.bold.red(msg)));
    }
  }

  apply(compiler) {
    const { outputPath, fileName = 'manifesto.json' } = this.options;

    compiler.hooks.done.tap('Custom Manifest', stats => {
      const assetsManifest = [];
      const { assets } = stats.compilation;

      Object.keys(assets).map(name => {
        let size = assets[name]['_cachedSize'] / 1000;

        if (!isNaN(size)) {
          size = Math.round(size) + ' KB';
          assetsManifest.push({ name, size });
        }
      });

      try {
        let filePath = outputPath + '/' + fileName;

        fs.writeFileSync(filePath, JSON.stringify(assetsManifest, null, 4));

        console.log(chalk.green.bold('Manifest generated'));
      } catch (error) {
        console.log(chalk.bold.bgRed('Exception:'), chalk.bold.red(error.message));
      }
    });
  }
}

module.exports = WebpackCustomManifestPlugin;
