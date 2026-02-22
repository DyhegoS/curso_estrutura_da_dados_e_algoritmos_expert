var catchThieves = function (arr, n, k) {
    let count = 0;
    let thieves = []

    for (let i = 0; i < n; i++) {
        if (arr[i] == "T") {
            thieves.push(arr[i]);
        }
    }
   
    for (let i = 0; i < n; i++) {
        if (arr[i] == "P" && thieves.length > 0) {
            let range = k;
            while (range > 0) {
                if (arr[i + range] == "T") {
                    count++;
                    thieves.pop();
                    break;
                }
                else if (arr[i - range] == "T") {
                    count++;
                    thieves.pop();
                    break;
                }
                else{
                    range--;
                }
            }
            
        }
    }
    
    return count;

}

const entrada1 = {
    "n": 5,
    "k": 2,
    "arr": ["P", "T", "T", "P", "T"]
}
const entrada2 = {
    "n": 6,
    "k": 2,
    "arr": ["T", "T", "P", "P", "T", "P"]
}

const entrada3 = {
    "n": 6,
    "k": 3,
    "arr": ["P", "T", "P", "T", "T", "P"]
}

console.log(catchThieves(entrada1.arr, entrada1.n, entrada1.k))
console.log(catchThieves(entrada2.arr, entrada2.n, entrada2.k))
console.log(catchThieves(entrada3.arr, entrada3.n, entrada3.k))
