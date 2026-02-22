const numberOfWays = function(n, m) {
    // Inicializa a tabela dp com zeros
    let memo = Array.from({ length: n }, () => Array(m).fill(0));

    // Preenche a primeira linha com 1s
    for (let i = 0; i < n; i++) {
        memo[i][0] = 1;
    }

    // Preenche a primeira coluna com 1s
    for (let j = 0; j < m; j++) {
        memo[0][j] = 1;
    }

    // Preenche o restante da tabela memo
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }

    // O resultado final está na célula memo[n-1][m-1]
    return memo[n - 1][m - 1];
}

// Exemplo de uso
let n = 25, m = 25;
console.log(numberOfWays(n, m));  // Saída esperada: 3
