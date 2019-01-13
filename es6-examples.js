// 1. Arrow functions/.bind
//ES5

function timesTwo(params) {
  return params * 2
}

timesTwo(4); //8

const arrowTimesTwo = params => params * 2;
arrowTimesTwo(4);  // 8

/////////////////////////////////////////////////////////////////////
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

const p = new Person();

console.log(p.age);

//////////////////////////////////////////////////////////////////////
// ES6

function arrowPerson() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

const ap = new arrowPerson();

console.log(ap.age);

//////////////////////////////////////////////////////////////////////
//2. Destructuring
//////////////////////////////////////////////////////////////////////
// ES5
const points = [20, 30, 40];

const x = points[0];
const y = points[1];
const z = points[2];

console.log(x, y, z);
//////////////////////////////////////////////////////////////////////
//ES6
const points = [20, 30, 40];

const [x, y, z] = points;

console.log(x, y, z);
//////////////////////////////////////////////////////////////////////
// 3. Template Literals
//ES5
var name = 'Tiger';
var age = 13;

console.log('My cat is named ' + name + ' and is ' + age + ' years old.');

//ES6
const name = 'Tiger';
const age = 13;

console.log(`My cat is named ${name} and is ${age} years old.`);