function countPaths(i, j) {
    
    if (i === 0 || j === 0) {
        return 1;
    }

    return countPaths(i - 1, j) + countPaths(i, j - 1);
    //teste

}

console.log(countPaths(25, 10));