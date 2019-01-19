class RandomStringGenerator {
  generate() {
    return this._rand() + this._rand();
  }

  _rand() {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  }
}

export default RandomStringGenerator;
