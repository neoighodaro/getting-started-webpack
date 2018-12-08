import generateRandomString from './utilities/random';

document.addEventListener('DOMContentLoaded', () => {
  const randomString = `Random String: ${generateRandomString()}`;
  window.setTimeout(() => (document.getElementsByTagName('h1')[0].innerHTML = randomString), 0);
});
