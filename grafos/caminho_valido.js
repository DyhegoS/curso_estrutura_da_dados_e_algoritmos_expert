var validPath = function (n, edges, source, destination) {
    // Armazena todas as arestas de acordo com os nós em 'graph'
    var adj_list = [];
    for (var i = 0; i < edges.length; i++) {
        var a = edges[i][0], b = edges[i][1];
        if (!adj_list[a]) adj_list[a] = [];
        if (!adj_list[b]) adj_list[b] = [];
        adj_list[a].push(b);
        adj_list[b].push(a);
    }

    // Começa do nó fonte, adiciona-o à pilha
    var visited = new Array(n).fill(false);
    visited[source] = true;
    var stack = [source];

    while (stack.length > 0) {
        var currNode = stack.pop();
        if (currNode === destination) {
            return true;
        }
        // Adiciona todos os vizinhos não visitados do nó atual à pilha
        // e marca como visitado
        for (const neighbour of adj_list[currNode]) {
            if (!visited[neighbour]) {
                visited[neighbour] = true;
                stack.push(neighbour);
            }
        }
    }

    return false;

}

const entrada1 = {
    "n": 3,
    "edges": [[0, 1], [1, 2], [2, 0]],
    "source": 0,
    "destination": 2
}

const entrada2 = {
    "n": 6,
    "edges": [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]],
    "source": 0,
    "destination": 5
}

console.log(validPath(entrada1.n, entrada1.edges, entrada1.source, entrada1.destination))
console.log(validPath(entrada2.n, entrada2.edges, entrada2.source, entrada2.destination))