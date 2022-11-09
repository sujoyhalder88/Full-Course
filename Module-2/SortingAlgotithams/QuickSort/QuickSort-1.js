// quicksort------->
const partition = (array, start, end) => {
  let i = start;
  let j = end;
  let pivot = array[start];
  while (i < j) {
    while (i < j && array[--j] >= pivot);
    if (i < j) {
      array[i] = array[j];
    }
    while (i < j && array[++i] <= pivot);
    if (i < j) {
      array[j] = array[i];
    }
  }
  array[j] = pivot;
  return j;
};

const quickSort = (array, start, end) => {
  if (end - start < 2) return;
  const pivot = partition(array, start, end);
  quickSort(array, start, pivot);
  quickSort(array, pivot + 1, end);
};

const array = [1, 3, 5, 6, 2, 9, 4];
const n = array.length;
quickSort(array, 0, n);
console.log(array);
