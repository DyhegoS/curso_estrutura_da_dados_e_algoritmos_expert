var numRescueBoats = function (people, limit) {
    let l = 0, r = people.length - 1;

    people.sort((a, b) => a- b);

    let boats = 0;
    
    while(l <= r) {
        // fit two people in one boat
        if(people[r] + people[l] <= limit){
            l++;
            r--;
        }
        // only fit the heaviest
        else if(people[r] <= limit){
            r--;
        }
        else{
            l++;
        }
        boats++;
    }

    return boats;
}

const entrada1 = {
    "people": [1, 2],
    "limit": 3
}
const entrada2 = {
    "people": [3, 2, 2, 1],
    "limit": 3
}
const entrada3 = {
    "people": [3, 5, 3, 4],
    "limit": 5
}

console.log(numRescueBoats(entrada1.people, entrada1.limit))
console.log(numRescueBoats(entrada2.people, entrada2.limit))
console.log(numRescueBoats(entrada3.people, entrada3.limit))