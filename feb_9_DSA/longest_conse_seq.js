function findLongestConsecutiveSequence(arr) {
  let s = new Set();
  let maxLength = 0;

  //Add all elements to the set
  for (let i = 0; i < arr.length; i++) {
    s.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    //if the (currentElement - 1) is not in the set, the currentElement
    //is the first element in consecutive sequence
    if (!s.has(arr[i] - 1)) {
      //find the length of consecutive sequence
      let j = arr[i];
      while (s.has(j)) {
        j++;
      }

      let length = j - arr[i];

      if (length > maxLength) maxLength = length;
    }
  }

  return maxLength;
}

//Invoke
console.log(findLongestConsecutiveSequence([3, 6, 4, 7, 8, 5, 10]));
