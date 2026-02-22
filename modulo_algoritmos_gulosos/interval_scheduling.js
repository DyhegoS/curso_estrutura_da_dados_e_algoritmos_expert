var mostTasks = function(n , tasks){
    tasks.sort((a, b) => a.end - b.end); //ordena por tempo de termino
    
    let ans = 0, time = 0;
    for(let i = 0; i < n; i++){
        
        //se não houver conflitos
        if(tasks[i].start >= time){
            ans++;
            time = tasks[i].end;
        }
    }

    return ans;
}

console.log(mostTasks(8, [
    {start: 0, end: 6},
    {start: 1, end: 4},
    {start: 3, end: 5},
    {start: 3, end: 8},
    {start: 4, end: 7},
    {start: 5, end: 9},
    {start: 6, end: 10},
    {start: 8, end: 11}
]))