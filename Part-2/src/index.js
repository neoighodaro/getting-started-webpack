import generateRandomString from './utilities/random';

document.addEventListener('DOMContentLoaded', function() {
  var randomString = 'Random String: ' + generateRandomString();
  window.setTimeout(function() {
    document.getElementsByTagName('h1')[0].innerHTML = randomString;
  }, 0);
});
