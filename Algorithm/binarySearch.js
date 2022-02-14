function binarySearch(arr, value){
  var n = arr.length
  var iLeft = 0
  var iRight = n -1
  while(iLeft <= iRight){
    var iMid = (iLeft + iRight)/2
    if(arr[iMid] == value){
      return iMid
    }else if(arr[iMid] < value){
      iLeft = iMid +1
    }else{
      iRight = iMid -1
    }
  }
  return -1
}

arr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr, 6))