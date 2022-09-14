function quickSort(givenArr) {
  if (givenArr.length <= 1) return givenArr;
  let pivot = givenArr[givenArr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < givenArr.length - 1; i++) {
    let element = givenArr[i];
    if (element <= pivot) leftArr.push(element);
    else rightArr.push(element);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

let givenArr = [10, 30, 50, 43, 67, 8, 22, 45];
console.log(quickSort(givenArr));

// 10 30 43 8 22               50 67
// 10 8     30 43
// r-10 l-[]
