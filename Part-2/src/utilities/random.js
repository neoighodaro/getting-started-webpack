export default function() {
  const randStr = () =>
    Math.random()
      .toString(36)
      .substring(2, 15);

  return randStr() + randStr();
}
