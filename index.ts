#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t\t Welcome to the countdown timer by Abdul Samad\n"))
let askQuestions = await inquirer.prompt([{
    name: "question",
    type: "number",
    message: chalk.yellowBright.bold("Enter Your Number..")
}])
console.log(" ")
askQuestions = askQuestions.question
function countdown(seconds : number){
    let interval = setInterval(()=>{
        console.log(chalk.green.bold(`${seconds} seconds remaing`))
        seconds --;

    if(seconds <= 0){
        clearInterval(interval)
        console.log(chalk.red.bold("\nCountdown finished"))
    }
}, 1000)
}
countdown(askQuestions)