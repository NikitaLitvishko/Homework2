'use strict';

function hoisting() {
  console.log(message);
  var message = 'hello';
}
hoisting();
