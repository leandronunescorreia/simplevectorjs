"use strict";
var Vec3 = require('./simplevectorjs/vec3.js');

var a = new Vec3();
a.setup(1.0, 0.0, 0.0);

var b = new Vec3();
b.setup(0.0, 1.0, 0.0);

console.log(a.dot(b));
console.log(a.vecToString());
console.log('vec a('+a.vecToString()+') + vec b('+b.vecToString()+') = '+ a.add(b).vecToString());
a = a.cross(b);
console.log(a.vecToString());