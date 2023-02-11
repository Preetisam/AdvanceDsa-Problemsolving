function firstNonRepeatingCharacter(str) {
  let map = new Map();

  //Constrcuted a map of frequency of characters
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      let count = map.get(str[i]);
      count++;
      map.set(str[i], count);
    } else {
      map.set(str[i], 1);
    }
  }

  //Iterate over the array to find the first character whose frequency in the map is 1
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i]) && map.get(str[i]) === 1) {
      return str[i];
    }
  }
}

//Invoke
console.log(firstNonRepeatingCharacter("character"));
