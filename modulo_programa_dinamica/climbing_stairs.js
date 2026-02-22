//Exercicio 1

var climbStairs = function(n) {
    const memo = Array(n + 1).fill(-1); // Inicializa o array de memorização
    return climbStairsUtil(n, memo); // Chama a função auxiliar
};

var climbStairsUtil = function(n, memo) {
    if (memo[n] !== -1) { // Se o valor já foi calculado, retorna o memo
        return memo[n];
    }

    if (n === 0 || n === 1) { // Casos base
        return 1;
    }

    memo[n] = climbStairsUtil(n - 1, memo) + climbStairsUtil(n - 2, memo); // Calcula o valor e armazena no memo
    return memo[n];
}

console.log(climbStairs(2))//Resposta: 2
console.log(climbStairs(3))//Resposta: 3
console.log(climbStairs(45))//Resposta: 1836311903