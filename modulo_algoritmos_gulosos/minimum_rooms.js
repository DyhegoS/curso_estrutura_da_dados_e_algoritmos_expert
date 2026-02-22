var minimumRooms = function (start, end, n) {
    let rooms = 0;

    for(let i = 0; i < n - 1; i++){      
        if(start[i + 1] <= end[i]){
            rooms++;
        }
    }

    if(rooms == 0){
        rooms = 1;
    }

    return rooms;
}

const entrada1 = {
    "start": [900, 940, 950, 1100, 1500, 1800],
    "end": [910, 1200, 1120, 1130, 1900, 2000],
    "n": 6
}

const entrada2 = {
    "start": [900, 1100, 1235],
    "end": [1000, 1200, 1240],
    "n": 3
}

console.log(minimumRooms(entrada1.start, entrada1.end, entrada1.n))
console.log(minimumRooms(entrada2.start, entrada2.end, entrada2.n))