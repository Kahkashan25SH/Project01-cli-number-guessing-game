#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n\t Wellcome to Kah9a-Cli Number Guessing Game\n"));

// 1) Computer will generate a randome number - Done.

// 2) User input for gnuessing number - Done.

// 3) Compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt(
    [
       { 
          name: "userguessedNumber",
          type: "number",
          message:chalk.yellow("Please guess number between 1 to 5:"),
       },
    ]
);

if (answer.userGuessedNumber === randomNumber ){
    console.log(chalk.green("Congrasulation ! you guess a right number."));

}else {
    console.log(chalk.red("opss ! you guess a wrong number"));
};