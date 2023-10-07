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
scenarioCalc();
console.log(winningScenarios);