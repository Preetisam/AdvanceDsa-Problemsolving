function findSexTuplets(arr){
  let n = arr.length
  let RHS = new Array(n * n * n + 1)
  for( let  i = 0; i < n; i++){
    if(arr[i] !=0){
      for (let j =0;j<n;j++){
        for(let k =0;k<n ;k++){
          RHS[index++] = arr[i] * (arr[j] + arr [k)
        }
      }
    }
  }
  let RHSLength = RHS.length;
  RHS.sort((a,b) => a-b)
  let count =0;
  for(let i =0; i<n;i++){
    for(let j =0;j<n;j++){
      for(let k =0; k<n; k++){
        let val  = arr[i] + arr[j] +arr[k]
        count =count +(lastOccurance(RHS , val) -firstOccurance(RHS,val))
      }
    }
  }
  
  return count;
}
