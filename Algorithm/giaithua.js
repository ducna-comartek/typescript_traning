
//ko dung de quy
// function giaiThua(n){
//     if(n == 0){
//         return 1
//     }else{
//         var tong = 1
//         for(i = 1; i <= n; i++){
//             tong = tong * i
//         }
//         return tong
//     }
// }
//dung de quy
function giaiThua1(n){
    if(n==0){
        return 1
    }else{
        return n * giaiThua(n-1)
    }
    
}
// console.log(giaiThua(6))
console.log(giaiThua1(6))