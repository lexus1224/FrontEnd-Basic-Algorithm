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
  let newArr = arr.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
  });
  console.log(newArr);
}

function removeDup3(dupArr) {
  let arr = dupArr.slice();
  let newArr = Array.from(new Set(arr));
  console.log(newArr);
}

function removeDup4(dupArr) {
  let arr = dupArr.slice();
  let arrObj = {};
  for (let key = 0; key < arr.length; key++) {
    if (arrObj.hasOwnProperty(arr[key])) {
      arr.splice(key, 1);
      key--;
    }
    else
      arrObj[arr[key]] = true;
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

// removeDup2(dupArr);
// removeDup3(dupArr);
