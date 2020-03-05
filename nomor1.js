function minMax(arr) {
    let min = 0
    let max = 0
    result = ''
    //for min
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            min = arr[0]
        }
        else {
            if (min > arr[i]) {
                min = arr[i]
            }
        }
    }
    //for max
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            max = arr[0]
        }
        else {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
    }
    result = `Min= ${min} \nMax= ${max}`
    return result
}

console.log(minMax([1,5,8,0,9,7,4,3,2]))