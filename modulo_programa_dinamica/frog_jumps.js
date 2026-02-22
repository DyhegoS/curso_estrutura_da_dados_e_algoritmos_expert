var minJumpsValue = function(values){
    let n = values.length;
    let memo = Array(n).fill(-1);
    
    return minJumpsValueAux(n - 1, values, memo);
}

function minJumpsValueAux(n, values, memo){
    
    if (n === 0) {
        return 0;
    }

    if (memo[n] !== -1) {
        return memo[n];
    }

    let jumpCost1 = minJumpsValueAux(n - 1, values, memo) + Math.abs(values[n] - values[n - 1]);

    let JumpCost2 = Infinity;
    if(n - 2 >= 0){
        JumpCost2 = minJumpsValueAux(n - 2, values, memo) + Math.abs(values[n] - values[n - 2]);
    }

    return Math.min(jumpCost1, JumpCost2);
    
}

console.log(minJumpsValue([10, 30, 40, 20]));
console.log(minJumpsValue([10, 10]));
console.log(minJumpsValue([30, 10, 60, 10, 60, 50]));