function selectSort(arr){
    var n = arr.length
    for(i = 0; i < n; i++){
        var minIndex = i // = 0
        for(j = i + 1; j < n; j++){//j = 1
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            var tam = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = tam
        }
        console.log(i, arr)
    }
}

arr = [5,3,2,7,8,1,2]
selectSort(arr)