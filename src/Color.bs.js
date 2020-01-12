// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Float = require("./Float.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function make(r, b, g) {
  return {
          red: r,
          green: g,
          blue: b
        };
}

function toPpmString(t, max) {
  var parseNumber = function (n) {
    var x = max * n;
    if (x > max) {
      return max.toString();
    } else if (x < 0) {
      return "0";
    } else {
      return Math.round(x).toString();
    }
  };
  return parseNumber(t.red) + " " + parseNumber(t.green) + " " + parseNumber(t.blue);
}

function equals(c1, c2) {
  if (Float.equals(c1.red, c2.red) && Float.equals(c1.blue, c2.blue)) {
    return Float.equals(c1.green, c2.green);
  } else {
    return false;
  }
}

function add(c1, c2) {
  return {
          red: c1.red + c2.red,
          green: c1.green + c2.green,
          blue: c1.blue + c2.blue
        };
}

function subtract(c1, c2) {
  return {
          red: c1.red - c2.red,
          green: c1.green - c2.green,
          blue: c1.blue - c2.blue
        };
}

function multScalar(c, scalar) {
  return {
          red: c.red * scalar,
          green: c.green * scalar,
          blue: c.blue * scalar
        };
}

function hadamardProduct(c1, c2) {
  return {
          red: c1.red * c2.red,
          green: c1.green * c2.green,
          blue: c1.blue * c2.blue
        };
}

if (!Float.equals(-0.5, -0.5)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          67,
          2
        ]
      ];
}

if (!Float.equals(0.4, 0.4)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          68,
          2
        ]
      ];
}

if (!Float.equals(1.7, 1.7)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          69,
          2
        ]
      ];
}

var c1 = {
  red: 0.9,
  green: 0.75,
  blue: 0.6
};

var c2 = {
  red: 0.7,
  green: 0.25,
  blue: 0.1
};

if (!equals(add(c1, c2), {
        red: 1.6,
        green: 1,
        blue: 0.7
      })) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          77,
          2
        ]
      ];
}

var c1$1 = {
  red: 0.9,
  green: 0.75,
  blue: 0.6
};

var c2$1 = {
  red: 0.7,
  green: 0.25,
  blue: 0.1
};

var c3 = {
  red: 0.2,
  green: 0.5,
  blue: 0.5
};

if (!equals(subtract(c1$1, c2$1), c3)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          87,
          2
        ]
      ];
}

var c1$2 = {
  red: 0.2,
  green: 0.4,
  blue: 0.3
};

var c2$2 = {
  red: 0.4,
  green: 0.8,
  blue: 0.6
};

if (!equals(multScalar(c1$2, 2), c2$2)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          95,
          2
        ]
      ];
}

var c1$3 = {
  red: 1,
  green: 0.2,
  blue: 0.4
};

var c2$3 = {
  red: 0.9,
  green: 1,
  blue: 0.1
};

var c3$1 = {
  red: 0.9,
  green: 0.2,
  blue: 0.04
};

if (!equals(hadamardProduct(c1$3, c2$3), c3$1)) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        /* tuple */[
          "Color.ml",
          105,
          2
        ]
      ];
}

exports.make = make;
exports.toPpmString = toPpmString;
exports.equals = equals;
exports.add = add;
exports.subtract = subtract;
exports.multScalar = multScalar;
exports.hadamardProduct = hadamardProduct;
/*  Not a pure module */