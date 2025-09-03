/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let isFull = false;
let isRested = false;

const hasTorch = true;
const hasMap = false;
const hasWater = false;
const hasCoat = true;

console.log("You're off on your quest.");
const choice1 = readline.question("What do you do before heading off? — eat or nap?  ");
if (choice1 === "eat") {
  isFull = true;
  console.log("You have a good meal. You are full.");
} else if (choice1 === "nap") {
  isRested = true;
  console.log("You take a good nap. You are well rested and wide awake for your adventure!");
} else {
  console.log("You go on your adventure without any prep.");
}

console.log(" ");

console.log("You see two paths: one leads to the mountains, the other to the village.  ");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?  ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains. ");
  let weather = readline.question("What is the weather like up there — deserty or snowy?  ");
  if (weather === "deserty" && hasWater) {
    console.log("It's hot, so you take a sip of water.")
  } else if (weather === "snowy" && hasCoat) {
    console.log("It's cold, so you put on your coat.")
  } else if (weather === "deserty" && !hasWater) {
    console.log("You don't have water, so you die of thirst.")
  } else if (weather === "snowy" && !!hasCoat) {
    console.log("You don't have a coat, so you freeze to death.")
  } else {
    weather = readline.question("Answer deserty or snowy:  ");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back. ");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village. ");
  console.log(" ");
  if (isFull) {
    console.log("You ask for a bed to rest on.");
  } else if (isRested) {
    console.log("You ask where to grab a bite.");
  }
} else {
  console.log("You get lost and wander aimlessly. ");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/