export const shuffle = (arr) => {
    let x;
    let y;
    let temp;
    
    for(x = arr.length - 1; x > 0; x -= 1) {
        y = Math.floor(Math.random() * x);
        temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }

    return arr;
}