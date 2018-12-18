import generateRandomString from './utilities/random';
import './style.scss';

document.addEventListener('DOMContentLoaded', function() {
  var randomString = 'Random String: <span>' + generateRandomString() + '</span>';
  window.setTimeout(function() {
    document.getElementsByTagName('h1')[0].innerHTML = randomString;
  }, 0);
});
