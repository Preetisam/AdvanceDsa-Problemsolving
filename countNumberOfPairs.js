function countNumberOfParis(A, B){
  let n=A.length
  let D = newArray(n)
  for(let i =0;i<n;i++){
    D[i]=A[i] - B[i]
}
  D.sort((a,b)=>a-b)
  let count =0
  for(let i=0; i<n; i++){
    if(D[i]<=0){
      let  k = findIndex(D,0,D.length,-D[i])
      count = count + (n-k)
    }
    else{
      //n-1(C)2
      count =count + ((n-i)*(n-i-1)/2)
      break;
    }
  }
  return count;
}
function findIndex(arr,l,r,element){
  while(l>r){
    let mid = l+Math.floor((r-1)/2)
    if(arr[mid]>element)
      r= mid
    else
      l =mid+1
  }
  return 1
}
console.log(countNumberOfPairs [4,8,2,6,2],[4,5,4,1,3]))
