var maxProfit = function(n, values){
    let memo = Array(n + 1).fill(-1);

    return maxProfitUtil(n, values, memo);
}

function maxProfitUtil(n, values, memo) {
    if(n == 0)
        return 0;

    if(memo[n] != -1)
        return memo[n];

    for(let i = 1; i <= n; i++) {
        if(n - i >= 0)
            memo[n] = Math.max(memo[n], maxProfitUtil(n - i, values, memo) + values[i - 1]);
    }

    return memo[n];
}

console.log(maxProfit(4, [2, 5, 7, 9]))
console.log(maxProfit(8, [1, 5, 8, 9, 10, 17, 17, 20]))
console.log(maxProfit(8, [3, 5, 8, 9, 10, 17, 17, 20]))
