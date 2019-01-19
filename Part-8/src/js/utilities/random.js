const RandomStringGenerator = () => {
  // generate() {
  //   return this._rand() + this._rand();
  // }

  // _rand() {
  //   return Math.random()
  //     .toString(36)
  //     .substring(2, 15);
  // }

  const _rand = () => {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  };

  return _rand() + _rand();
};

export default RandomStringGenerator;
