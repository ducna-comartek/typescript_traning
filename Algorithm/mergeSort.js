const mergeSort = arr => {
    // *** Chúng ta sẽ không chia arr ra thành các mảng con nữa nếu arr chỉ có 1 phần tử
    if(arr.length <= 1) return arr;
    
    // *** vì splice sẽ thay đổi giá trị của arr nên mình copy arr để giữ nguyên giá trị ban đầu của nó
    const right = [...arr];
    
    // *** chia đôi mảng ra thành 2 mảng con
    const middlePoint = arr.length / 2;
    const left = right.splice(0, middlePoint);

    // *** tiếp tục chia các mảng con ra thành các mảng con
    return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
}

const mergeUnsortedArrs = (left, right) => {
    const sortedItems = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedItems.push(left)
        }else{
            sortedItems.push(right)
        }
    }
    return [...sortedItems, ...left, ...right]
}

const arr = [5,4,3,2,1]
console.log(mergeSort(arr))