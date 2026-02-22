var findContentChildren = function(g, s){
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let cookies = s.length;
    let childSatisfied = 0;

    for(let i = 0; i < s.length; i++){
        if(cookies > 0){
            if(s[i] >= g[i]){
            childSatisfied++;
            cookies--;
            }
        }  
    }   

    return childSatisfied;
}

const entrada1 = {
    "g": [1, 2, 3],
    "s": [1, 1]
}

const entrada2 = {
    "g": [1, 2],
    "s": [2, 3, 1]
}

const entrada3 = {
    "g": [1, 2, 3],
    "s": [3]
}

console.log(findContentChildren(entrada1.g, entrada1.s));
console.log(findContentChildren(entrada2.g, entrada2.s));
console.log(findContentChildren(entrada3.g, entrada3.s));