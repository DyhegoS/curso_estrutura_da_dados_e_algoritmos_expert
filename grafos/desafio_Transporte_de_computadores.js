function dijkstra(n, locations, connections) {
    const dist = new Array(n).fill(Infinity);
    const visited = new Array(n).fill(false);
    dist[0] = 0;

    for (let k = 0; k < n; k++) {
        let current = -1;
        for (let i = 0; i < n; i++) {
            if (visited[i])
                continue;

            if (current === -1 || dist[i] < dist[current]) {
                current = i;
            }
        }

        visited[current] = true;

        for (const [neighbour, w] of connections[current]) {
            if (dist[current] + w < dist[neighbour]) {
                dist[neighbour] = dist[current] + w;
            }
        }
    }

    return locations.map(v => dist[v]).reduce((a, b) => a + b);
}

function totalDeliveryCost(n, connections, locations) {
    const adjList = Array.from({ length: n }, () => [])

    for (const [xi, yi, costi] of connections) {
        adjList[xi].push([yi, costi]);
        adjList[yi].push([xi, costi]);
    }

    return dijkstra(n, locations, adjList);
}

const entrada1 = {
    "n": 6,
    "connections": [
        [0, 1, 1],
        [0, 2, 2],
        [0, 3, 3],
        [1, 4, 3],
        [2, 4, 2],
        [3, 4, 3],
        [4, 5, 4]
    ],
    "locations": [1, 2, 3, 4, 5]
};

const entrada2 = {
    "n": 6,
    "connections": [
        [0, 1, 1],
        [0, 2, 2],
        [0, 3, 3],
        [1, 4, 3],
        [2, 4, 2],
        [3, 4, 3],
        [4, 5, 4]
    ],
    "locations": [2, 4, 5, 5]
};

console.log(totalDeliveryCost(entrada1.n, entrada1.connections, entrada1.locations));
console.log(totalDeliveryCost(entrada2.n, entrada2.connections, entrada2.locations));