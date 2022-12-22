let movies = ["Страх и ненависть в Лас-Вегасе", "Джакузи в старшей школе", "Техасская резня бензопилой 13"];
let answers = [];
for(let i = 0; i < movies.length; i++){
    answers[i] = prompt(`Вы смотрели ${movies[i]}?`);
}
for(let j = 0; j < movies.length; j++){
    console.log(`${movies[j]}
                    ${answers[j]}`)
}
