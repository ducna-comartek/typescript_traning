// function insertSort(arr){
//     var n = arr.length
//     for(i = 1; i < n; i++){
//         var a = arr[i]
//         j = i - 1
//         while((j >= 0) && (arr[j] > a)){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = a
//         console.log(i, arr)
//     }
// }
// arr = [5,3,2,7,8,1]
// insertSort(arr)

arr = [5,3,2,7,8,1]
arr[4] = arr[3]
console.log(arr)