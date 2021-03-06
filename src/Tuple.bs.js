// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Float = require("./Float.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var zeroVector = {
  x: 0,
  y: 0,
  z: 0,
  w: 0
};

function equals(a, b) {
  if (Float.equals(a.x, b.x) && Float.equals(a.y, b.y) && Float.equals(a.z, b.z)) {
    return Float.equals(a.w, b.w);
  } else {
    return false;
  }
}

function makeTuple(x, y, z, w) {
  return {
          x: x,
          y: y,
          z: z,
          w: w
        };
}

function makePoint(x, y, z) {
  return {
          x: x,
          y: y,
          z: z,
          w: 1
        };
}

function makeVector(x, y, z) {
  return {
          x: x,
          y: y,
          z: z,
          w: 0
        };
}

function isPoint(param) {
  return param.w === 1;
}

function isVector(param) {
  return param.w === 0;
}

function add(a, b) {
  return {
          x: a.x + b.x,
          y: a.y + b.y,
          z: a.z + b.z,
          w: a.w + b.w
        };
}

function subtract(a, b) {
  return {
          x: a.x - b.x,
          y: a.y - b.y,
          z: a.z - b.z,
          w: a.w - b.w
        };
}

function negate(t) {
  return {
          x: -t.x,
          y: -t.y,
          z: -t.z,
          w: -t.w
        };
}

function multiplyScalar(t, scalar) {
  return {
          x: t.x * scalar,
          y: t.y * scalar,
          z: t.z * scalar,
          w: t.w * scalar
        };
}

function divideScalar(t, scalar) {
  return {
          x: t.x / scalar,
          y: t.y / scalar,
          z: t.z / scalar,
          w: t.w / scalar
        };
}

function magnitude(t) {
  return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w);
}

function isUnitVector(t) {
  return Float.equals(magnitude(t), 1);
}

function normalize(v) {
  var m = magnitude(v);
  return {
          x: v.x / m,
          y: v.y / m,
          z: v.z / m,
          w: v.w / m
        };
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}

function cross(a, b) {
  return makeVector(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
}

var a = {
  x: 4.3,
  y: -4.2,
  z: 3.1,
  w: 1
};

if (isVector(a)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          107,
          2
        ]
      ];
}

if (!isPoint(a)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          108,
          2
        ]
      ];
}

var a$1 = {
  x: 4.3,
  y: -4.2,
  z: 3.1,
  w: 0
};

if (isPoint(a$1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          114,
          2
        ]
      ];
}

if (!isVector(a$1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          115,
          2
        ]
      ];
}

var p = {
  x: 4,
  y: -4,
  z: 3,
  w: 1
};

if (!equals(p, {
        x: 4,
        y: -4,
        z: 3,
        w: 1
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          120,
          2
        ]
      ];
}

var v = {
  x: 4,
  y: -4,
  z: 3,
  w: 0
};

if (!equals(v, {
        x: 4,
        y: -4,
        z: 3,
        w: 0
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          123,
          2
        ]
      ];
}

var a$2 = {
  x: 3,
  y: -2,
  z: 5,
  w: 1
};

var b = {
  x: -2,
  y: 3,
  z: 1,
  w: 0
};

var c = {
  x: 1,
  y: 1,
  z: 6,
  w: 1
};

if (!equals(add(a$2, b), c)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          130,
          2
        ]
      ];
}

var p1 = {
  x: 3,
  y: 2,
  z: 1,
  w: 1
};

var p2 = {
  x: 5,
  y: 6,
  z: 7,
  w: 1
};

var vec = {
  x: -2,
  y: -4,
  z: -6,
  w: 0
};

if (!equals(subtract(p1, p2), vec)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          139,
          2
        ]
      ];
}

var p$1 = {
  x: 3,
  y: 2,
  z: 1,
  w: 1
};

var v$1 = {
  x: 5,
  y: 6,
  z: 7,
  w: 0
};

var diff = {
  x: -2,
  y: -4,
  z: -6,
  w: 1
};

if (!equals(subtract(p$1, v$1), diff)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          148,
          2
        ]
      ];
}

var v1 = {
  x: 3,
  y: 2,
  z: 1,
  w: 0
};

var v2 = {
  x: 5,
  y: 6,
  z: 7,
  w: 0
};

var v3 = {
  x: -2,
  y: -4,
  z: -6,
  w: 0
};

if (!equals(subtract(v1, v2), v3)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          158,
          2
        ]
      ];
}

var vec$1 = {
  x: 1,
  y: -2,
  z: 3,
  w: 0
};

var expected = {
  x: -1,
  y: 2,
  z: -3,
  w: 0
};

if (!equals(subtract(zeroVector, vec$1), expected)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          166,
          2
        ]
      ];
}

var a$3 = {
  x: 1,
  y: -2,
  z: 3,
  w: -4
};

if (!equals(negate(a$3), {
        x: -1,
        y: 2,
        z: -3,
        w: 4
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          172,
          2
        ]
      ];
}

var a$4 = {
  x: 1,
  y: -2,
  z: 3,
  w: -4
};

if (!equals(multiplyScalar(a$4, 3.5), {
        x: 3.5,
        y: -7,
        z: 10.5,
        w: -14
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          179,
          2
        ]
      ];
}

var a$5 = {
  x: 1,
  y: -2,
  z: 3,
  w: -4
};

if (!equals(multiplyScalar(a$5, 0.5), {
        x: 0.5,
        y: -1,
        z: 1.5,
        w: -2
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          186,
          2
        ]
      ];
}

var a$6 = {
  x: 1,
  y: -2,
  z: 3,
  w: -4
};

if (!equals(divideScalar(a$6, 2), {
        x: 0.5,
        y: -1,
        z: 1.5,
        w: -2
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          193,
          2
        ]
      ];
}

var v$2 = {
  x: 1,
  y: 0,
  z: 0,
  w: 0
};

if (!Float.equals(magnitude(v$2), 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          199,
          2
        ]
      ];
}

var v$3 = {
  x: 0,
  y: 1,
  z: 0,
  w: 0
};

if (!Float.equals(magnitude(v$3), 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          205,
          2
        ]
      ];
}

var v$4 = {
  x: 0,
  y: 0,
  z: 1,
  w: 0
};

if (!Float.equals(magnitude(v$4), 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          211,
          2
        ]
      ];
}

var v$5 = {
  x: 1,
  y: 2,
  z: 3,
  w: 0
};

if (!Float.equals(magnitude(v$5), Math.sqrt(14))) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          217,
          2
        ]
      ];
}

var v$6 = {
  x: -1,
  y: -2,
  z: -3,
  w: 0
};

if (!Float.equals(magnitude(v$6), Math.sqrt(14))) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          223,
          2
        ]
      ];
}

var v$7 = {
  x: 4,
  y: 0,
  z: 0,
  w: 0
};

if (!equals(normalize(v$7), {
        x: 1,
        y: 0,
        z: 0,
        w: 0
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          229,
          2
        ]
      ];
}

var v$8 = {
  x: 1,
  y: 2,
  z: 3,
  w: 0
};

var norm = normalize(v$8);

if (!Float.equals(magnitude(norm), 1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          236,
          2
        ]
      ];
}

var a$7 = {
  x: 1,
  y: 2,
  z: 3,
  w: 0
};

var b$1 = {
  x: 2,
  y: 3,
  z: 4,
  w: 0
};

if (!Float.equals(dot(a$7, b$1), 20)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          243,
          2
        ]
      ];
}

var a$8 = {
  x: 1,
  y: 2,
  z: 3,
  w: 0
};

var b$2 = {
  x: 2,
  y: 3,
  z: 4,
  w: 0
};

if (!equals(cross(a$8, b$2), {
        x: -1,
        y: 2,
        z: -1,
        w: 0
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          251,
          2
        ]
      ];
}

if (!equals(cross(b$2, a$8), {
        x: 1,
        y: -2,
        z: 1,
        w: 0
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Tuple.ml",
          252,
          2
        ]
      ];
}

exports.zeroVector = zeroVector;
exports.equals = equals;
exports.makeTuple = makeTuple;
exports.makePoint = makePoint;
exports.makeVector = makeVector;
exports.isPoint = isPoint;
exports.isVector = isVector;
exports.add = add;
exports.subtract = subtract;
exports.negate = negate;
exports.multiplyScalar = multiplyScalar;
exports.divideScalar = divideScalar;
exports.magnitude = magnitude;
exports.isUnitVector = isUnitVector;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
/*  Not a pure module */
