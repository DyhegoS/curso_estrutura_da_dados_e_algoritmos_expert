var minimumBottles = function(n, x, bottles){
    bottles.sort((a, b) => a - b);
    let result = 0;
    let restX = x;
    for(let i = 0; i < n - 1; i++){
        if(bottles[i] > restX){
            break;
        }else if(restX > 0){
            restX -= bottles[i];
            result++;
        }
    }
    return result;

}

const entrada1 = {
    "n": 5,
    "x": 10,
    "bottles": [8, 5, 4, 3, 2]
}

const entrada2 = {
    "n": 3,
    "x": 10,
    "bottles": [6, 3, 2]
}

console.log(minimumBottles(entrada1.n, entrada1.x, entrada1.bottles));
console.log(minimumBottles(entrada2.n, entrada2.x, entrada2.bottles));