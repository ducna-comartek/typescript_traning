function thirdMax(arr){
   var max, second_max, third_max = null
   for(var i in arr){
      if(i === max || i === second_max || i === third_max){
         continue
      }
      if(max == null || i > max){
         third_max = second_max
         second_max = max
         max = i
      }else if(second_max == null || i > second_max){
         third_max = second_max
         second_max = i
      }else if(third_max == null || i > third_max){
         third_max = i
      }
   }
   if(third_max == null){
      return max
   }
   return third_max
   
}

arr = [3,2,1]
console.log(thirdMax(arr))