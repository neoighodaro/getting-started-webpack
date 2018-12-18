export default function() {
  function randStr() {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  }

  return randStr() + randStr();
}
