// grafo direcionado e ponderado utilizando lista de adjacências
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i = 0; i < numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge(v1, v2, w) {
        this.adjList[v1].push([v2, w]);
        
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v[0] !== v2);
    }

    printGraph() {
        for (let i = 0; i < this.numVertices; i++) {
            console.log(`${i} -> {${this.adjList[i].join(" | ")}}`);
        }
    }

    degree(v) {
        return this.adjList[v].length;
    }

    listByDegree() {
        let degrees = [];

        for(let i = 0; i < this.numVertices; i++){
            let degree = this.degree(i);

            if(!degrees[degree]){
                degrees[degree] = [];
            }

            degrees[degree].push(i);
        }

        for(let i = 0; i <= this.numVertices;i++){
            if(degrees[i]){
                console.log(`grau=${i}:{${degrees[i].join(",")}}`);
            }
            else{
                console.log(`grau=${i}:{}`);
            }
        }
    }

    lowestWeight(){

        let minEdge = [-1, -1, -1];
        let minValue = Infinity;
        //percorrer vertices
        for(let i = 0; i < this.numVertices; i++){
            //percorrer adjacentes ao vertice
            for(let j = 0; j < this.adjList[i].length; j++){
                let currentEdge = this.adjList[i][j];
                if(currentEdge[1] < minValue){
                    minValue = currentEdge[1];
                    //coloca vertice de partida, chegada e peso
                    minEdge = [i, currentEdge[0], currentEdge[1]];
                }
            }
        }

        return minEdge;
    }

    neighbours(v){
        return this.adjList[v].map(v => v[0]);
    }
}

// Exemplo de uso:

let g = new Graph(5);
g.addEdge(0, 1, 2);
g.addEdge(0, 2, 5);
g.addEdge(0, 3, 3);
g.addEdge(4, 3, -5);
// g.removeEdge(0, 2);
console.log("Grafo:");
g.printGraph();
console.log(`Menor peso: ${g.lowestWeight()}`)
const neighbour = 0;
console.log(`Vizinho de ${neighbour} é ${g.neighbours(neighbour)}`)