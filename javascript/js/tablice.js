'use strict';


var imiona = ['monika', 'krystian','lukasz',];
imiona[3] = 'tania';
imiona[2] = 'gregor';
imiona.push ('geralt');
imiona.pop ();
imiona.pop ();
console.log (imiona);
console.log(imiona.unshift('Robert'));
console.log(imiona.shift('Robert'));

console.log(imiona.join("+"));
imiona.sort();
imiona.reverse();
console.log(imiona);