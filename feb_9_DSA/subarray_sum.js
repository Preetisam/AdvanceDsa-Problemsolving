function subArrayWithSumZeroExists(arr) {
  let sumSet = new Set();

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (sum === 0 || sumSet.has(sum)) return true;

    sumSet.add(sum);
  }

  return false;
}

//Invoke
console.log(subArrayWithSumZeroExists([4, 2, -3, 1, 6]));
