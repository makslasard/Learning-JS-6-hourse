const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const binarySearch = (arr, item) => {
    let start = 0
    let end = arr.length
    let middle
    let found = false
    let position = -1

    while (found === false && start <= end) {
        middle = Math.floor((start - end) / 2)

        if (arr[middle] === item) {
            found = true
            position = middle
            return position
        }
        if(item <= arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
}
binarySearch(array, 8)