var minimumScarecrows = function(n, field){
    let scarecrow = 0;
    
    //percorrer o campo
    for(let i = 0;i < n; i++){
        //achar um ponto fertil e colocar espantalho
        if(field[i] === "."){
            scarecrow++;
            i += 2;
        }
    }

    return scarecrow;

};

const entrada1 = {
    "n": 3,
    "field": ".#."
};

const entrada2 = {
    "n": 11,
    "field": "...##....##"
};



const entrada3 = {
    "n": 2,
    "field": "##"
};

console.log(minimumScarecrows(entrada1.n, entrada1.field));
console.log(minimumScarecrows(entrada2.n, entrada2.field));
console.log(minimumScarecrows(entrada3.n, entrada3.field));