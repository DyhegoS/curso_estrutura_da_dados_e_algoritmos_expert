var minCostClimbingStairs = function(cost){
    let n = cost.length;
    const memo = Array(n + 1).fill(-1); // Inicializa o array de memoização

    return minCostClimbingStairsUtil(n, cost, memo);
}

function minCostClimbingStairsUtil(n, cost, memo){
    //como não há custo para o primeiro e segundo degrau, então o caso base passa a ser esses dois
    if (n === 0 || n === 1) {
        return 0;
    }

    //se já foi passado por esse degrau
    if (memo[n] !== -1) {
        return memo[n];
    }

    //armazeno na memoria qual o custo minimo entre o 1º e 2º degrau que estiver a frente
    memo[n] = Math.min(
        minCostClimbingStairsUtil(n - 1, cost, memo) + cost[n - 1],
        minCostClimbingStairsUtil(n - 2, cost, memo) + cost[n - 2]
    );

    return memo[n];
}

console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))