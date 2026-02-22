var lemonadeChange = function(bills){
    let cashier = 0;
    let n = bills.length;
    let result = false;
    for(let i = 0; i < n; i++){
        if(bills[i] > 5){
            let change = bills[i] - 5;
            if(cashier >= change){
                cashier += 5;
                cashier -= change;
                result = true;
            }
            else{
                return result = false;
            }
        }else{
            cashier += 5;
            result = true;
        }
        
        
    }
    return result


}




const entrada1 = {
    "bills": [5, 5, 5, 10, 20]
}

const entrada2 = {
    "bills": [5, 5, 10, 10, 20]
}

console.log(lemonadeChange(entrada1.bills));
console.log(lemonadeChange(entrada2.bills));