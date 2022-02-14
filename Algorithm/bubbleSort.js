function bubbleSort(arr){
    var n = arr.length
    for (i = 0; i < n; i++){
        checkSort = false
        for(j = 0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                checkSort = true
                arr[j], arr[j+1] = arr[j+1], arr[j]
                tam = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tam
            }
        }
        if(checkSort == false){
            break
        }
    }
}

arr = [2,1,3,4,3,9,0]
bubbleSort(arr)
console.log('Sort number is :')
console.log(arr)