#! /usr/bin/env node 

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PAK: 277,
  AFG: 71,
  CAD: 204,
  EUR: 301,
};
let user_Answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter your Currency",
    type: "list",
    choices: ["USD", "PAK", "AFG", "CAD", "EUR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "PAK", "AFG", "CAD", "EUR"],
  },
  {
    name: "amount",
    message: "Enter your Amount",
    type: "number",
  },
]);
let fromAmount = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
