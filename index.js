import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const filteredArray = fifaData.filter((gameObj) => {
    return gameObj["Year"] === 2014 && gameObj["Stage"] === "Final";
});

console.log(filteredArray[0]["Home Team Name"]);
console.log(filteredArray[0]["Away Team Name"]);
console.log(filteredArray[0]["Home Team Goals"]);
console.log(filteredArray[0]["Away Team Goals"]);
console.log(filteredArray[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as a parameter and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(function(gameObject){
        return gameObject["Stage"] === "Final";
    });
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsArray) {
    const finalsArray = getFinalsArray(fifaData);
    const years = finalsArray.map(item => {
        return item["Year"];
    });
    return years;
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    const finalsWinner = getFinals(fifaData);
    const winners = finalsWinner.map(item => {
       const homeGoals = item["Home Team Goals"];
       const awayGoals = item["Away Team Goals"];
        if (homeGoals > awayGoals) {
            return item["Home Team Initials"];
        }
       else if (homeGoals < awayGoals) {
           return item["Away Team Initials"];
       }
       else {
           return `Draw`;
       }
    });
    return winners;
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear() {
    const winnerByYear = fifaData.reduce((accumulator, currentElement) => {
        const homeGoals = currentElement["Home Team Goals"];
        const awayGoals = currentElement["Away Team Goals"];
        let country = "";
        if (homeGoals > awayGoals) {
            country = currentElement["Home Team Name"];
        }
        else if (homeGoals < awayGoals) {
            country = currentElement["Away Team Name"];
        }
        else {
            country = `Draw`;
        }
        return accumulator + `In ${currentElement["Year"]}, ${country} won the world cup!\n`;
    }, "");
   
    return winnerByYear;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */
    // Per match:
        // Define total amount of home team goals
        // And total amount of away team goals

    // 1.
    // Need to know how many mathces there are
    const matches = data.length;
    // 2.
    // Define total amount of home goals
    const homeGoals = data.reduce((accumulator, currentValue) => {
        // return my found data
        return accumulator + currentValue["Home Team Goals"];
    }, 0);
    const awayGoals = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue["Away Team Goals"];
    }, 0);
    const homeAverage = homeGoals / matches;
    const awayAverage = awayGoals / matches;

    console.log(`The home average is: ${Math.round(homeAverage)}`);
    console.log(`The away average is: ${Math.round(awayAverage)}`);
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const winningInitials = getWinners(getFinals);
    // find out how many times a winning inital team comes up
    return winningInitials.reduce((accumulator, currentValue) => {
        if (currentValue === teamInitials) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);
// find each individual country
// then tally up how many wins they had
// goal is to find how many wins a country had
};

console.log(getCountryWins(fifaData, "PER")); //for example


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
