function flattern(arr) {
  let newArr = []
  for (let i of arr) {
    if (Array.isArray(i)) {
      newArr = newArr.concat(flattern(i));
    }
    else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(flattern([1, [1, 2], 2, [3, [4, 5, 6, [7]]]]));

