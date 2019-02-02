function findMinAndRemove(array){
    let min = array[0]
    let minIndex = 0
    array.forEach((num, index) => {
        if (num < min) {
            min = num
            minIndex = index
        }
    })
    array.splice(minIndex, 1)
    return min
}

function insertionSort(array){
    let sorted = []
    while (array.length > 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
