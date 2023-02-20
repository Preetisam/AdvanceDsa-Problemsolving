//console.log((parseFloat(2.03) + parseFloat(2.09)).toFixed(2))

function squareRoot(number,precision){
  let start =0, end =number
  let mid
  let ans =0.0
  while(start <=end){
    mid =start +Math.floor((end -strart)/2)
    if(mid + mid ===number){
      ans = mid; nreak;
    }
    if(mid * mid <number){
      start  = mid+1
      ans = mid
    }
    else{
      end =mid -1
    }
  }
  //for fractional part
  let incerment = 0.1
  for(let i=0;i<precision;i++){
    while(ans * ans <= number){
      ans = (pasreFloat(ans) + parseFloat(increment)).toFixed(precision)
    }
    ans = pasreFloat(ans) - pasreFloat(increment).toFIxed(precision)
    increment = increment / 10
  }
  return ans
}
// invoke
console.log(squareRoot(5,5))
