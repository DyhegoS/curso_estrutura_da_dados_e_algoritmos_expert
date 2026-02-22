/*
    c = jaulas
    s = feras
    m = listas com os pesos das feras
*/

var minimumImbalance = function(c, s, m){
    //calculo da media
    let a = 0;
    for(let j = 0;j < s; j++){
        a += m[j];
    }
    a /= c;

    //adicionar extras
    if(s < 2*c){
        let dummies = 2*c - s;
        for(let i = 0;i < dummies; i++){
            m.push(0);
        }
    }

    //ordenar crescentemente
    m.sort((a, b) => a - b);

    let chambers = []; //gaiolas
    //percorre até a metade para parear o primeiro com o ultimo e assim por diante
    for(let i = 0;i < c; i++){
        chambers[i] = [];
        chambers[i].push(m[i]);
        chambers[i].push(m[2*c - 1 - i]);
    }

    let imbalance = 0;
    //percorrer na jaula
    for(let i = 0;i < c; i++){
        let xi = 0; 
        //massa total das feras na jaula i
        for(let j = 0; j < chambers[i].length; j++){
            xi += chambers[i][j];
        }
        imbalance += Math.abs(xi - a);
    }

    return imbalance;
}

console.log(minimumImbalance(3, 4, [5, 1, 2, 7]))