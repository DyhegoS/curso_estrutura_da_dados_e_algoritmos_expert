var canVisitAllRooms = function(rooms) {
    var visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    var stack = [];
    stack.push(0);

    while (stack.length > 0) {
        var current = stack.pop();
        for(const neighbour of rooms[current]){
            if (!visited[neighbour]) { 
                visited[neighbour] = true; 
                stack.push(neighbour);
            }
        }
    }

    for (var i = 0; i < visited.length; i++) {
        if (!visited[i]) return false;
    }
    return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))