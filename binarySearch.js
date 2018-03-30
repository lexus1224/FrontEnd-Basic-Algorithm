function binarySearch1(arr, low, high, target) {
  let mid = Math.floor((low + high) / 2);
  let midNum = arr[mid];
  if (low <= high) {
    if (target < midNum)
      return binarySearch1(arr, low, mid - 1, target);
    else if (target > midNum)
      return binarySearch1(arr, mid + 1, high, target);
    else {
      return mid;
    }
  }
  else
    return new Error('not Exist.');
}

function binarySearch2(arr, low, high, target) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midNum = arr[mid];
    if (target < midNum)
      high = mid - 1;
    else if (target > midNum)
      low = mid + 1;
    else
      return mid;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
let result = binarySearch2(arr, 0, 13, 10);
console.log(result);