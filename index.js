import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log("_____Task 1_____");

console.log("Home Team: " + fifaData[828]["Home Team Name"]);
console.log("Away Team: " + fifaData[828]["Away Team Name"]);
console.log("Home Goals: " + fifaData[828]["Home Team Goals"]);
console.log("Away Goals: " + fifaData[828]["Away Team Goals"]);
console.log("Winner: " + fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log("_____Task 2_____");

function getFinals() {
  const finalsData = fifaData.filter((item) => {
    return item.Stage === "Final";
  });
  return finalsData;
}
console.log(getFinals());

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

console.log("_____Task 3_____");

function getYears(callback) {
  const years = callback.map((item) => {
    return {
      Year: item.Year,
    };
  });
  return years;
}

console.log(getYears(getFinals()));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

console.log("_____Task 4_____");

function getWinners(callback) {
  const winners = [];

  const homeTeam = callback.map((item) => {
    return {
      Country: item["Home Team Name"],
      Score: item["Home Team Goals"],
    };
  });

  const awayTeam = callback.map((item) => {
    return {
      Country: item["Away Team Name"],
      Score: item["Away Team Goals"],
    };
  });

  const noScore = callback.map((item) => {
    return {
      Conditional: item["Win conditions"],
    };
  });

  for (let i = 0; i < callback.length; i++) {
    if (homeTeam[i].Score > awayTeam[i].Score) {
      winners.push(homeTeam[i].Country);
    } else if (homeTeam[i].Score < awayTeam[i].Score) {
      winners.push(awayTeam[i].Country);
    } else if (homeTeam[i].Score === awayTeam[i].Score) {
      winners.push(`Tie game, ${noScore[i].Conditional}`);
    }
  }
  return winners;
}

console.log(getWinners(getFinals()));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

console.log("_____Task 5_____");

let x = getFinals();

function getWinnersByYear(callback1, callback2) {
  for (let i = 0; i < callback1.length; i++) {
    if (callback2[i].includes("Tie game")) {
      console.log(`In ${callback1[i].Year}, ${callback2[i]}`);
    } else {
      console.log(
        `In ${callback1[i].Year}, ${callback2[i]} won the world cup!`
      );
    }
  }
}

getWinnersByYear(getYears(x), getWinners(x));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

console.log("_____Task 6_____");

function getAverageGoals(data) {
  const homeTeamAvg = data.reduce((total, item) => {
    return total + item["Home Team Goals"];
  }, 0);

  const awayTeamAvg = data.reduce((total, item) => {
    return total + item["Away Team Goals"];
  }, 0);

  console.log(
    `Average Home Team Goals: ${(homeTeamAvg / data.length).toFixed(
      2
    )}, Average Away Team Goals: ${(awayTeamAvg / data.length).toFixed(2)}.`
  );
}

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

console.log("_____Stretch 1_____");

function getCountryWins(data, teamInitials) {
  let teamWins = [];
  let teamWins2 = [];

  for (let i = 0; i < data.length; i++) {
    if (
      data[i]["Away Team Initials"] === teamInitials &&
      data[i]["Away Team Goals"] > data[i]["Home Team Goals"]
    ) {
      teamWins.push(data[i]["Away Team Goals"]);
    } else if (
      data[i]["Home Team Initials"] === teamInitials &&
      data[i]["Home Team Goals"] > data[i]["Away Team Goals"]
    ) {
      teamWins2.push(data[i]["Home Team Goals"]);
    }
  }
  return console.log(
    `Total Wins ${teamInitials}: ${teamWins.length + teamWins2.length}`
  );
}

getCountryWins(fifaData, "ITA");

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your choosing as listed in the README file. */
