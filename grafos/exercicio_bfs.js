class Graph{
    constructor(numVertices){
        this.numVertices = numVertices;
        this.adjList = [];

        for(let i = 0; i < numVertices; i++){
            this.adjList[i] = [];
        }
    }

    addEdge(v1, v2){
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    neighbours(v){
        return this.adjList[v];
    }

    bfs(v, visited){
        let queue = [];
        //inicio a fila com o vertice já visitado
        queue.push(v);
        //o vertice informado já foi visitado
        visited[v] = true;

        //ainda precisamos processar os vertices
        while(queue.length !== 0){
            v = queue.shift();

            console.log("v = " + v);

            //percorrendo os vizinhos de v
            for(const w of this.neighbours(v)){
                if(!visited[w]){
                    visited[w] = true;
                    queue.push(w);
                }
            }
        }
    }

    connected_components(){
        let visited = Array(this.numVertices).fill(false);
        let count = 0;
        
        //tentar achar componente a partir do vertice i
        for(let i = 0; i < this.numVertices; i++){
            if(!visited[i]){
                console.log("Componente = " + count);
                this.bfs(i, visited);
                count++;
            }
        }

        return count;
    }

}

const graph = new Graph(7);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,2);
graph.addEdge(3,4);
graph.addEdge(2,6);

console.log("Número de componentes conexas " + graph.connected_components());