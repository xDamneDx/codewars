// Link: https://www.codewars.com/kata/573bca07dffc1aa693000139

/*

This time you do not need coding in function. You just need to write a regular
expression that matches the specified numeric string. I've given the regular
expression name: "regex", please don't modify the name.

According to the following rules:

1. The numeric string first digit should be "9".
2. At the end of the number string there are at least four "0".
3. It can also be a negative number(This means that the string may be started by "-",
maybe not)

Examples

    regex.test("90000") should return true
    regex.test("-90000") should return true
    regex.test("900000000") should return true
    regex.test("91230000") should return true
    regex.test("-91230000") should return true

    regex.test("90001") should return false
    regex.test("9000") should return false
    regex.test("91230") should return false
    regex.test("1-90000") should return false
    regex.test("-90000123") should return false

*/

const regex = /^-?9.{0,}0{4}$/;

console.log(regex.test("90000")); // true
console.log(regex.test("-90000")); // true
console.log(regex.test("900000000")); // true
console.log(regex.test("91230000")); // true
console.log(regex.test("-91230000")); // true

console.log(regex.test("90001")); // false
console.log(regex.test("9000")); // false
console.log(regex.test("91230")); // false
console.log(regex.test("1-90000")); // false
console.log(regex.test("-90000123")); // false

/* Top 3 solutions: (sorted by best practices)

===

var regex=/^-?9\d*0{4}$/

===

const regex=/^(-9|9)\d*0000$/

===

var regex=/^-?9[0-9]*0{4,}$/

*/
