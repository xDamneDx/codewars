// Link: https://www.codewars.com/kata/572af273a3af3836660014a1

/*

Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr,
it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The
3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The
direction of flow is controlled by the parameter d. The value of d can be "left" or "right".
"left" means the "river" moves to the left. All elements in the 1D array are to the left
moving n position, if beyond the bounds of the array and the element is moved to the tail
on the left side of the array; if it exceeds the left boundary element would be moved to
the tail of 3rd array(like a circle). Right is also similar to the operation, but it is
moving to the right.

Finally, return arr.

Examples

    infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
    infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
    infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]

*/

const infiniteLoop = (arr, d, n) => {
  const arrCopy = arr.slice();

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < arrCopy.length; j += 1) {
      if (d === "left") {
        if (j === arrCopy.length - 1) break;
        if (j === 0) {
          arrCopy[arrCopy.length - 1].push(arrCopy[j].shift());
        }

        arrCopy[j].push(arrCopy[j + 1].shift());
      } else if (d === "right") {
        if (j === 0) {
          arrCopy[j].unshift(arrCopy[arrCopy.length - 1].pop());
          continue;
        }

        arrCopy[j].unshift(arrCopy[j - 1].pop());
      }
    }
  }

  return arrCopy;
};

/* Top 3 solutions: (sorted by best practices)

===

function infiniteLoop(arr,d,n){
  for (var i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}

===

function infiniteLoop(arr,d,n){
  
  var len = arr.length;
  while(n--){
    for(var i=0;i<len;i++){
      if(d === "left") arr[i].push( arr[(i+1)%len].shift() ) 
      if(d === "right") arr[(i+1)%len].unshift( arr[i].pop() );
    }
  }

  return arr;
  
}

===

function infiniteLoop(arr,d,n){
  var [x, y, z] = arr.map(x => x.length),
      arr = arr.reduce((a, b) => a.concat(b)),
      remover = d == 'right' ? 'pop' : 'shift',
      adder = d == 'right' ? 'unshift' : 'push';
  for(var i = 0; i < n; i++){
    var e = arr[remover]();
    arr[adder](e);
  }
  return [arr.splice(0, x), arr.splice(0, y), arr]
}

*/
