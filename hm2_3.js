'use strict';

function inc(num) {
  return ++num.n;
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);
