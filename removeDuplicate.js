let dupArr = [9, undefined, 6, 6, 6, 4, 'n', 1, 6, 5, 7, 9, undefined, 8, 4, 2, 7, 'n',];

function removeDup1(dupArr) {
  let arr = dupArr.slice();
  arr = arr.sort();
  for (let key = 1; key < arr.length; key++) {
    if (arr[key] === arr[key - 1]) {
      arr.splice(key, 1);
      key--;
    }
  }
  console.log(arr);
}

function removeDup2(dupArr) {
  let arr = dupArr.slice();
  let newArr = [];
  for (let val of arr) {
    if (newArr.indexOf(val) === -1)
      newArr.push(val);
  }
  console.log(newArr);
}

function removeDup3(dupArr) {
  let arr = dupArr.slice();
  let arrSet = new Set();
  for (let key = 0; key < arr.length; key++) {
    if (arrSet.has(arr[key])) {
      arr.splice(key, 1);
      key--;
    }
    else
      arrSet.add(arr[key]);
  }
  console.log(arr);
}

function removeDup4(dupArr) {
  let arr = dupArr.slice();
  let arrObj = {};
  for (let key = 0; key < arr.length; key++) {
    if (arrObj[arr[key]] !== undefined) {
      arr.splice(key, 1);
      key--;
    }
    else
      arrObj[arr[key]] = 1;
  }
  console.log(arr);
}

function removeDup5(dupArr) {
  let arr = dupArr.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--)
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
        i--;
        break;
      }
  }
  console.log(arr);
}

// removeDup5(dupArr);
