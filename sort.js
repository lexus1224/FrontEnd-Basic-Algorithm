let sortArr = [9, 6, 4, 1, 5, 3, 8, 2, 7];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rec = arr[i], pos = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > rec) {
        arr[j + 1] = arr[j];
      }
      else {
        pos = j + 1;
        break;
      }
    }
    arr[pos] = rec;
  }
}

function selectSort(arr) {
  let minpos, minval;
  for (let i = 0; i < arr.length - 1; i++) {
    minpos = i;
    minval = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minval) {
        minpos = j;
        minval = arr[j];
      }
    }
    if (minpos !== i)
      swap(arr, i, minpos)
  }
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let sortflag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        sortflag = false;
      }
    }
    if (sortflag)
      break;
  }
}

function quickSort(arr) {
  if (arr.length <= 1)
    return arr;
  let pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];
  let left = [], right = [];
  for (let i of arr) {
    if (i <= pivot)
      left.push(i);
    else
      right.push(i);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function quickSortC(arr, low, high) {
  if (low < high) {
    let pivotPos = partition(arr, low, high);
    quickSortC(arr, low, pivotPos - 1);
    quickSortC(arr, pivotPos + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot)
      high--;
    arr[low] = arr[high];
    while (low < high && arr[low] < pivot)
      low++;
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

console.log(sortArr);