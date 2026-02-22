const jsonData = require('./input.json');

function maxWarehouseValue(C, N, prices, volume){
    
    let dp = Array.from({ length: N + 1 }, () => Array(C + 1).fill(0));
 
    for (let i = 1; i <= N; i++) {
        for (let c = 1; c <= C; c++) {
            if (volume[i - 1] <= c) {
                dp[i][c] = Math.max(dp[i - 1][c], prices[i - 1] + dp[i - 1][c - volume[i - 1]]);
            } else {
                dp[i][c] = dp[i - 1][c];
            }
        }
    }

    return dp[N][C];
}

const entrada1 = {
"C": 10,
"N": 4,
"prices": [5, 12, 8, 1],
"volume": [4, 8, 5, 3]
}

const entrada2 = {
"C": 10,
"N": 4,
"prices": [5, 15, 8, 1],
"volume": [4, 8, 5, 3]
}
const entrada3 = {
"C": 4,
"N": 3,
"prices": [1, 2, 3],
"volume": [4, 5, 1]
}
const entrada4 = {
"C": 3,
"N": 3,
"prices": [1, 2, 3],
"volume": [4, 5, 6]
}
const entrada5 = {
"C": 0,
"N": 3,
"prices": [20, 30, 40],
"volume": [10, 20, 30]
}
const entrada6 = {
"C": 100,
"N": 0,
"prices": [],
"volume": []
}

console.log("================================= Entrada 1 =================================")
console.log(maxWarehouseValue(entrada1.C, entrada1.N, entrada1.prices, entrada1.volume))
console.log("================================= Entrada 2 =================================")
console.log(maxWarehouseValue(entrada2.C, entrada2.N, entrada2.prices, entrada2.volume))
console.log("================================= Entrada 3 =================================")
console.log(maxWarehouseValue(entrada3.C, entrada3.N, entrada3.prices, entrada3.volume))
console.log("================================= Entrada 4 =================================")
console.log(maxWarehouseValue(entrada4.C, entrada4.N, entrada4.prices, entrada4.volume))
console.log("================================= Entrada 5 =================================")
console.log(maxWarehouseValue(entrada5.C, entrada5.N, entrada5.prices, entrada5.volume))
console.log("================================= Entrada 6 =================================")
console.log(maxWarehouseValue(entrada6.C, entrada6.N, entrada6.prices, entrada6.volume))
console.log("================================= Entrada 7 =================================")
console.log(maxWarehouseValue(jsonData.C, jsonData.N, jsonData.prices, jsonData.volume))