function allCowsCanBeTied(arr, mid, k){
  let countCows = 1
  let cow = arr[0]
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - cow >= mid){
      cow = arr[i]
      countCows++;
    }else{
      continue;
    }
  }
  
  if(countCows >= k){
    return true
  }
  
  return false
}


function aggressiveCows(arr, k){
  //Find your search space
  let l = 1
  let r = arr[arr.length - 1] - arr[0]
  
  let ans = -1
  
  while(r >= l){
    let mid = l + Math.floor((r - l) / 2)
    
    if(allCowsCanBeTied(arr, mid, k)){
      ans = mid;
      l = mid + 1
    } else{
      r = mid - 1
    }
  }
  
  return ans
}


//Invoke
console.log(aggressiveCows([1, 2, 4, 8, 9], 3))
