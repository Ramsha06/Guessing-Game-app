#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//code
const random_no = Math.floor(Math.random() * 8 + 1);
const guess_no = await inquirer.prompt([{
        message: chalk.magentaBright.underline("Guess anumber between 1 & 8") + " ",
        type: "number",
        name: "ans"
    }]);
if (random_no === guess_no.ans) {
    console.log(chalk.greenBright("CONGRATULATION! You guessed a right number."));
}
else {
    console.log(chalk.redBright("Oops! Betterluck next time."));
}
