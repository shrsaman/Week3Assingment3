
const game = {
    team1: "Bayern Munich",    
    team2: "Borrussia Dortmund",
    players: [    
    [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Lwandowski",
    ],
    [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
    ],
    
    ],
    score: "4.0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
    },
    };

    //task1
    console.log(game.scored)

    // for(let Counter = 0; Counter < game.scored -1; Counter++){
        // console.log(`Goal ${Counter + 1}${game.scored[Counter]}`)
    for(let i = 0; i < game.scored.length; i++){
        console.log(`Goal ${i + 1} ${game.scored[i]}`)
    }

    //task2
    const oddValues = Object.values(game.odds)
    // console.log(oddValues)
    sum = 0
    for(let a=0; a < oddValues.length; a++){
        sum = sum + oddValues[a]
        
    }
    console.log(`average is ${sum/oddValues.length}`)

    //task3
    
for (const J in game.odds){
    if (game[J]){
        console.log(`Odd of victory ${game[J]}: ${game.odds[J]}`);
        // else {
            console.log(`Odd of draw: ${game.odds[J]}`);
    
        
 
    }
}

//Bonus

function printGoals(goalscorers) {
    const result = {};
    for (let i = 0; i < goalscorers.length; i++) {
        if (result[goalscorers[i]]) {
            result[goalscorers[i]]++;
        }
        else {
            result[goalscorers[i]] = 1;
        }
    }
    return result;
}
// console.log(printGoals(game.scored));
for (const k in game.odds) {
    if (game[k]) {
        console.log(game[k], game.odds[k]);
    }
    else {
        console.log("draw", game.odds[k]);
    }
}
console.log(Object.entries(printGoals(game.scored)).sort());




