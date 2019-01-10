import RandomStringGenerator from './utilities/random';
import copyToClipboard from './utilities/copyToClipboard';
import '../scss/app.scss';
import passwordIcon from '../images/lock-solid.svg';
import copyIcon from '../images/copy-solid.svg';
import securityIllustration from '../images/security.svg';

document.getElementById('header_image').src = securityIllustration;

const copyIconElem = document.getElementById('copy_icon');
copyIconElem.src = copyIcon;
copyIconElem.onclick = () => {
  copyToClipboard(document.getElementById('actual_password').innerText);
  alert('Copied to clipboard');
};

document.getElementById('password_icon').src = passwordIcon;

document.addEventListener('DOMContentLoaded', () => {
  const randomStringGenerator = new RandomStringGenerator();
  const randomString = `Random String: <span id="actual_password">${randomStringGenerator.generate()}</span>`;
  document.getElementById('random_password').innerHTML = randomString;
});
