'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', undefined,
  -999, -0.007, true, undefined, { name: 'Nikita' },
  'hell', { number: 1337, name: 'Solo' }];
const hash = {
  number: 0,
  string: 0,
  boolean: 0,
  //null: 0, typeof null = "object"
  undefined: 0,
  object: 0,
};
for (const item of arr) {
  hash[typeof item] = hash[typeof item] ? hash[typeof item] + 1 : 1;
}
console.dir(hash);
