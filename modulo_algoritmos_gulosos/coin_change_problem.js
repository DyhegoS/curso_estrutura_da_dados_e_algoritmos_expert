var minimumCoins = function(v , n, coins){
    coins.sort((a, b) => b - a);

    //percorre as moedas e escolhe  a maior no momento
    let ans = 0;
    for(let i = 0; i < n; i++){
        //retirando a moeda atual enquanto for possivel
        while(v - coins[i] >= 0){
            v -= coins[i];
            ans++;
        }
    }

    return ans;
}

console.log(minimumCoins(37, 4, [25, 10, 5, 1]))