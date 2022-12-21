/* eslint-disable */
import _ from 'lodash';
import './style.css';
/* eslint-enable */

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = '';

  return element;
}

document.body.appendChild(component());