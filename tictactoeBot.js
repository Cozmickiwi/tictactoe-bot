// create object cointaining arrays of all possible winning outcomes in a game of tictactoe (e.g. 2, 5, 8)
// explicitly define the diagonal outcomes as will be annoying to generate
let winningScenarios = {

};
function scenarioCalc() {
    //create 2 loops, one for the horizontal outcomes, and one for the vertical outcomes
    let horizTicker = 1;
    let horizArray = [];
    let vertTicker = 1;
    let vertTicker2 = 1;
    let vertArray = [];
    let iterationTicker = 1;
    let vertSub = 2;
    while(horizTicker < 10) {
        horizArray.push(horizTicker);
        horizTicker += 1;
        if(horizArray.length == 3) {
            let newArray = (`${horizArray}`).split(',');
            let newIntArray = newArray.map(str => {
                return Number(str);
            });
            winningScenarios[`outcome${iterationTicker}`] = newIntArray;
            horizArray.length = 0;
            iterationTicker += 1;
        }
    }
    while(vertTicker2 < 10) {
        vertArray.push((vertTicker * 3) - vertSub);
        vertTicker += 1;
        vertTicker2 += 1;
        if(vertArray.length == 3) {
            vertSub -= 1;
            let newArray = (`${vertArray}`).split(',');
            let newIntArray = newArray.map(str => {
                return Number(str);
            });
            winningScenarios[`outcome${iterationTicker}`] = newIntArray;
            vertArray.length = 0;
            iterationTicker += 1;
            vertTicker = 1;
        }
    }
    winningScenarios['outcome7'] = [1, 5, 9];
    winningScenarios['outcome8'] = [3, 5, 7];
}

//randomly select one of the outcomes in the winningScenarios object
//use rng to randomly select outcome item (1-3) and output to console
//make a game function, which (at this point) prompts player for a number from 1 to 9
//if player choice is contained in selected outcome array, change to new array
//dont focus on making player lose yet, just focus on making the computer win
function game() {
    let randomSelect = 0;
    while(randomSelect == 0  || randomSelect == 9){
        randomSelect = Math.floor(Math.random() * 9);
    }
    let outcomeSelect = (`outcome${randomSelect}`);
    let arrayChoice = winningScenarios[outcomeSelect];
    console.log(arrayChoice);
    let randomChoice = -1;
    let randomChoiceHis = [];
    for(i = 0; i < 3; i++){
        let playerSelection = prompt('choose number between 1 and 9');
        if(arrayChoice.includes(Number(playerSelection))){
            return('');
        }
        while(randomChoice < 0 || randomChoice == 3 || (randomChoiceHis.includes(randomChoice) && randomChoiceHis.length < 4)){
            randomChoice = (Math.floor(Math.random() * 4) - 1);
        }
        //figure out way to not allow player and computer to input already selected numbers
        //make stalemate detector
        //make bot able to make player lose if close to winning (probably only when player is 1 choice away from win)
        randomChoiceHis.push(randomChoice);
        console.log(arrayChoice[randomChoice]);
        console.log(`player: ${playerSelection}`);
        console.log(randomChoiceHis);
        if(randomChoiceHis.length == 3) {
            gameEnd = true;
            return('end');
        }
}
}
gameEnd = false;
scenarioCalc();
console.log(winningScenarios);
while(gameEnd == false){
    game();
}
