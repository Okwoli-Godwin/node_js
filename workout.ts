// console.log("We are ready...!");

// setInterval(() => {
//   console.log("Skip this Ad in 5secs");
//   setTimeout(() => {
//     console.log("Press this Button to Skip");
//   }, 10000);
// }, 1000);

import os from "os";
// console.log("This is: ", os.version());
// console.log("This is: ", os.homedir());
// console.log("This is: ", os.hostname());
let file = os.networkInterfaces();
// console.log("This is: ", Object.keys(file));

let x: any[] = [];

for (let i in file) {
  x.push(file[i]);
}

console.log("This is my Local Address: ", x[1][1].address);

// let yy = { boy: "Peter", girl: "Bukky", food: "Rice" };
// console.log(yy.boy);
// console.log(Object.keys(yy));

// let xx: string[] = [];
// for (let i in yy) {
//   xx.push(yy[i]);
// }

let start = os.cpus();

let check = start[1].model.split(" ")[2].split("-")[0].split("")[1];
let store = os.totalmem() / 1000000000;

let result = Math.floor(store);
console.log(result);
if (check >= "9") {
  if (result >= 8) {
    console.log("You can install this Program");
  } else {
    console.log("Your RAM cannot install this Program");
  }
} else {
  console.log("Go get a new Laptop...!");
}

// console.log(start[1].model.split(" ")[2].split("-")[0].split("")[1]);

// console.log(result);
// console.log(os.freemem());

console.log(os.type());
console.log(os.userInfo());
console.log(os.release());

import prompt from "prompt-sync";

const pt = prompt();

while (true) {
  let numb: number = Math.floor(Math.random() * 10);
  for (let i = 0; i < 3; i++) {
    console.log("");
    let guessNumb: number = parseInt(pt("Guess what's on my MIND📢: "));

    if (numb === guessNumb) {
      console.log("");
      console.log("You read my Mind, RIGHT!");
      break;
    } else {
      if (numb < guessNumb) {
        console.log("");
        console.log("You are WRONG");
        console.log(
          `Your Number:${guessNumb} is greater than the right Number which is ${numb}`
        );
        continue;
      } else if (numb > guessNumb) {
        console.log("");
        console.log("You are WRONG");
        console.log(
          `Your Number:${guessNumb} is lesser than the right Number which is ${numb}`
        );
        continue;
      }
    }
  }

  console.log("");
  let entry = pt("Press Y to continue or N to Quit: ").toUpperCase();

  if (entry === "Y") {
    console.log("");
    console.log("Let's do this...!");
    continue;
  } else if (entry === "N") {
    console.log("");
    console.log("It Hurts to see you go...!");
    break;
  }
}

console.log("End of Game!");

// while (true) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }
//   break;
// }

// console.log("End Now!");