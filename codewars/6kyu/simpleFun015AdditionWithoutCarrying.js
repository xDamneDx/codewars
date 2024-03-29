// Link: https://www.codewars.com/kata/588468f3b3d02cf67b0005cd/javascript

/*

A little boy is studying arithmetics. He has just learned how to add two integers,
written one below another, column by column. But he always forgets about the
important part - carrying.

Given two integers, find the result which the little boy will get.

Example

For param1 = 456 and param2 = 1734, the output should be 1180

        456
       1734
     + ____
       1180
   
The little boy goes from right to left:

6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
5 + 3 = 8
4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under
            4 and 7.

There is no digit in the first number corresponding to the leading digit of the second
one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

Input/Output

[input] integer a

    A non-negative integer.
    Constraints: 0 ≤ a ≤ 99999.

[input] integer b

    A non-negative integer.
    Constraints: 0 ≤ b ≤ 59999.

[output] an integer

    The result that the little boy will get.

*/

const additionWithoutCarrying = (a, b) => {
  a = [...String(a)].reverse();
  b = [...String(b)].reverse();

  return +[...Array(Math.max(a.length, b.length))]
    .map((_, i) => {
      const x = isNaN(a[i]) ? 0 : +a[i];
      const y = isNaN(b[i]) ? 0 : +b[i];

      return (x + y) % 10;
    })
    .reverse()
    .join("");
};

console.log(additionWithoutCarrying(456, 1734)); // 1180
console.log(additionWithoutCarrying(99999, 0)); // 99999
console.log(additionWithoutCarrying(999, 999)); // 888
console.log(additionWithoutCarrying(0, 0)); // 0

/* Top 3 solutions: (sorted by best practices)

===

const additionWithoutCarrying = (a, b) =>
  +[...`${a}`.padStart(5)]
    .map((val, idx) => (+val + +`${b}`.padStart(5)[idx]) % 10)
    .join(``);

===

function additionWithoutCarrying(a,b) {
  let [z,k]=[0,0];
  while (a>0 || b>0) {
    z+=Math.pow(10,k++)*((a%10+b%10)%10);
    a=(a/10|0);
    b=(b/10|0);
  }
  return z; 
}

===

function additionWithoutCarrying(a, b) {
  let res = "";
  
  while (a > 0 || b > 0) {
    res = (a % 10 + b % 10) % 10 + res;
    
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  
  return +res;
}

*/
