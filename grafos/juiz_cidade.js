var findJudge = function(n, trust) {
    
    const trustCount = new Array(n + 1).fill(0);
    const trustsSomeone = new Array(n + 1).fill(false);

    for (let i = 0; i < trust.length; i++) {
        const [a, b] = trust[i];
        trustsSomeone[a] = true;
        trustCount[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1 && !trustsSomeone[i]) {
            return i;
        }
    }

    return -1;
};

console.log(findJudge(2, [[1, 2]]))
console.log(findJudge(3, [[1, 3], [2, 3]]))
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]))
