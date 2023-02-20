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



// function findSexTuplets(arr) {
//   const n = arr.length;
//   const RHS = new Array(n * n * n + 1);
//   let index = 0;
  
//   // Populate RHS array with products of non-zero elements in arr
//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== 0) {
//       for (let j = 0; j < n; j++) {
//         for (let k = 0; k < n; k++) {
//           RHS[index++] = arr[i] * (arr[j] + arr[k]);
//         }
//       }
//     }
//   }
  
//   // Sort RHS array in ascending order
//   RHS.sort((a, b) => a - b);
  
//   let count = 0;
  
//   // Iterate over all possible combinations of arr elements and count valid sextuplets
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         const sum = arr[i] + arr[j] + arr[k];
        
//         // Find the first and last occurrences of sum in RHS array
//         const firstIndex = RHS.indexOf(sum);
//         const lastIndex = RHS.lastIndexOf(sum);
        
//         // If sum is in RHS and the product of the triplet is also in RHS, increment count
//         if (firstIndex !== -1 && lastIndex !== -1) {
//           const product = arr[i] * arr[j] * arr[k];
//           for (let l = firstIndex; l <= lastIndex; l++) {
//             if (RHS[l] === product) {
//               count++;
//               break;
//             }
//           }
//         }
//       }
//     }
//   }
  
//   return count;
// }
