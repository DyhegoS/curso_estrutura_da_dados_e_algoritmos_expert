// grafo não-direcionado e não-ponderado utilizando lista de adjacências
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjList = [];
        for(let i = 0; i < numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1);
    }

    printGraph() {
        for (let i = 0; i < this.numVertices; i++) {
            let edges = this.adjList[i].join(", ");
            console.log(`${i} -> ${edges}`);
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
}

// Exemplo de uso:

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

console.log("Grafo:");
g.printGraph();

console.log("Grau do vértice 1:");
console.log(g.degree(1));

console.log("Lista de vértices ordenada pelo grau:");
console.log(g.listByDegree());