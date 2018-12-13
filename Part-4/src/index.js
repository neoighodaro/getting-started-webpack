import generateRandomString from './utilities/random';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const randomString = `Random String: <span>${generateRandomString()}</span>`;
  window.setTimeout(() => (document.getElementsByTagName('h1')[0].innerHTML = randomString), 0);
});
