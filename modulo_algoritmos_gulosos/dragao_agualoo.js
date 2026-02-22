function agualoo(n, m, diameters, heights) {
    
    let knights = heights.sort((a, b) => a - b);
    let dragonHeads = diameters.sort((a, b) => a - b);
    let knight = 0;
    let dragonHead = 0;
    let coins = 0;
    
    for(let i = 0; i < n; i++){

        while(knight < m){
            if(knights[knight] >= dragonHeads[i]){
                coins += knights[knight];
                knight++;
                dragonHead++;
                break;
            }else{
                knight++;
            }
        }
    }

    if(dragonHead == n){
        return coins;
    }else{
        return 'Agualoo está condenada!'
    }
}

const entrada1 = {
    "n": 2,
    "m": 3,
    "diameters": [5, 4],
    "heights": [7, 8, 4]
};

const entrada2 = {
    "n": 2,
    "m": 1,
    "diameters": [5, 5],
    "heights": [10]
};
const entrada3 = {
    "n": 2,
    "m": 4,
    "diameters": [7, 2],
    "heights": [4, 3, 1, 2]
};
const entrada4 = {
    "n": 2,
    "m": 4,
    "diameters": [7, 2],
    "heights": [2, 1, 8, 5]
};
const entrada5 = {
    "n": 2,
    "m": 10,
    "diameters": [1234567, 2345],
    "heights": [12345610, 1, 123, 23564, 123456, 123, 2, 3, 2, 1]
};

console.log(agualoo(entrada1.n, entrada1.m, entrada1.diameters, entrada1.heights));
console.log(agualoo(entrada2.n, entrada2.m, entrada2.diameters, entrada2.heights));
console.log(agualoo(entrada3.n, entrada3.m, entrada3.diameters, entrada3.heights));
console.log(agualoo(entrada4.n, entrada4.m, entrada4.diameters, entrada4.heights));
console.log(agualoo(entrada5.n, entrada5.m, entrada5.diameters, entrada5.heights));