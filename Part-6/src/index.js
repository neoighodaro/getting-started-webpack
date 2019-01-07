import RandomStringGenerator from './utilities/random';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const randomStringGenerator = new RandomStringGenerator();
  const randomString = `Random String: <span>${randomStringGenerator.generate()}</span>`;
  window.setTimeout(() => (document.getElementsByTagName('h1')[0].innerHTML = randomString), 0);
});
