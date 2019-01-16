import join from 'lodash/join';
import new_ from 'new-lodash';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = new_.join(['Hello', 'webpack'], ' ');

  return element;
}

function component1() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = new_.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component1());