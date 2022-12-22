const sums = [[1, 5, 6],[7, 2, 4, 6],[7, 10, 1],[1, 3]];
let max = 0;
let min = Infinity;
let average = [];
let maxAndMinCounter = 0;
let averageSum = 0;
for(let i = 0; i<sums.length; i++){
    maxAndMinCounter = 0;
    for(let j = 0; j<sums[i].length; j++){
        maxAndMinCounter += sums[i][j];
        if(j+1 == sums[i].length){
            +average.push(maxAndMinCounter);
        }
        
    }
    if(maxAndMinCounter < min){
        min = maxAndMinCounter;
    }
    if(maxAndMinCounter > max){
        max = maxAndMinCounter
    }
}
console.log(max);
console.log(min);
for(let i = 0; i < average.length; i++){
    averageSum += average[i];
}
console.log(averageSum/average.length);
