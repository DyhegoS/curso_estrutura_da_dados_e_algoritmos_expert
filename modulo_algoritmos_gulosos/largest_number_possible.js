var findLargest = function(n, s){
    //1. ver se é possivel  que exista um número  nessas condições, se não retornar -1
    if(9 * n < s || (s == 0 && n > 1)){
        return "-1";
    }

    //2. escolher os maiores digitos possiveis pro valor
    let ans = "";
    let digit;
    while(s > 0){

        if(s - 9 >= 0){
            s -= 9;
            digit = "9";
        }
        else{
            digit = String.fromCharCode('0'.charCodeAt(0) + s);
            s = 0;
        }

        ans += digit; 
    }
    
    //3. completar N digitos restantes se necessarios
    while(ans.length < n){
        ans += "0";
    }
    
    return ans;
}

const entrada1 = {
    "n": 2,
    "s": 9
}

const entrada2 = {
    "n": 3,
    "s": 20
}

const entrada3 = {
    "n": 4,
    "s": 0
}

console.log(findLargest(entrada1.n, entrada1.s))
console.log(findLargest(entrada2.n, entrada2.s))
console.log(findLargest(entrada3.n, entrada3.s))
