var coinChange = function(coins, amount){
    let memo = Array(amount + 1).fill(Infinity);

    memo[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            let subproblem = i - coin;
            if (subproblem >= 0) {
                memo[i] = Math.min(memo[i], memo[subproblem] + 1);
            }
        }
    }

    if(memo[amount] === Infinity) return -1
    return memo[amount];
}


console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1, 2, 3, 7, 11], 10000));