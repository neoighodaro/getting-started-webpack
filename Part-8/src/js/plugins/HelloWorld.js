class HelloWorld {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap('HelloWorld', () => {
      console.log(this.options.message || 'Hello World!');
    });
  }
}

module.exports = HelloWorld;
