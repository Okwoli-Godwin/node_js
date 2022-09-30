
// const display = (a: number, b: number): number =>{
//     return a + b  
// }

// setInterval(() =>{
//     console.log(display(5, 6))
// }, 2000)

// setTimeout(() =>{
//     console.log("Its time out....")
// }, 2000)

import os from "os"
// console.log("This is ",os.version())
// console.log("This is ",os.homedir())
// console.log("This is ",os.hostname())
// console.log("This is ",os.networkInterfaces().l)
let file = os.networkInterfaces()

// let x: any[] = [];

// for (let i in file){
//     x.push(file[i])
// }

// console.log("This is my local Address:", x[1][1].address)

let start = os.cpus();
let check = start[2].model.split(" ")[1].split("-")[0].split("")[1]
console.log(check)

let store = os.totalmem() / 1000000000

let result = Math.floor(store)
if (check >= "8") {
    console.log("You can install this program ")
} else {
    console.log("go get a new laptop")
}
console.log(result)

import prompt from "prompt-sync"

const pt = prompt();


while (true){
    let numb:number = Math.floor(Math.random()*10);
    for(let i=0; i <=3; i++){
        let guessNumb:number = parseInt(pt("Guess what is on my mind:😎"))

    if(numb === guessNumb){
    console.log("You have read my mind:👏")
    break;
} else {
    if(numb < guessNumb){
        console.log("")
        console.log("You are wrong: 🤣🤣🤣😂😂😂")
        console.log(`Your Number: ${guessNumb} is lesser than the right Number which is ${numb}`)
    } else if(numb > guessNumb){
        console.log("")
        console.log("You are wrong: 🤣🤣🤣😂😂😂")
        console.log(`Your Number: ${guessNumb} is greater than the right Number which is ${numb}`)
    }
    continue;
}
    }
    // break;

    let entry = pt("Press Y to continue or E to quit: ".toUpperCase())

    if(entry === "Y"){
        continue;
    } else if(entry === "E") {
        break;
    }
    
}

console.log("Game ended: 🥵🥵🥵🥵🥵🥵🚶‍♂️🚶‍♂️🚶‍♂️🚶‍♂️🚶‍♂️")