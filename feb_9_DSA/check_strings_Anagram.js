function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  //Map of frequency of characters of str1
  let map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i])) {
      let count = map.get(str1[i]);
      count++;
      map.set(str1[i], count);
    } else {
      map.set(str1[i], 1);
    }
  }

  //Loop over str2 and check
  for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i])) {
      let count = map.get(str2[i]);
      count--;
      map.set(str2[i], count);
    } else {
      return false;
    }
  }

  //Check if value for every key in map has become 0
  let keys = map.keys();

  for (let key of keys) {
    if (map.get(key) != 0) {
      return false;
    }
  }

  return true;
}

//Invoke
console.log(isAnagram("earth", "terh"));
