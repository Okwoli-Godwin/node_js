import os from "os"
// console.log(os)

let file =os.networkInterfaces()
// console.log(file)

let start = os.cpus()
// console.log(start)
let check = start[2].model.split(" ")[1].split("-")[0].split("")[1]
console.log(check)

let store = os.totalmem() / 1000000000
let result = Math.floor(store)

if(check >= "6") {
    console.log("You can install this progham")
} else {
    console.log("go get a new laptop")
}
console.log(result)

