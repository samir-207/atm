#! /usr/bin/env node

import inquirer from "inquirer";

// tasks
// store your balance and pin
// Take input from user of ATM's pin
// Verify that pin and display a message
// If entered pin is correct then give some options to user such as (withdraw, fast cash, balance check  etc.)
// if user select withdraw then ask user to input amount and verify that amount <= myBalance
// if <= then deduct that amount from balance and show remaining balance
// if > then display insuficient balance
// if user select fast cash then give some option like (2000, 3000, 5000 etc.)
// after user select any option then deduct that amount and display remaining balance
// if user select balance check then simply display original stored balance.

let myBalance = 50000;
let myPin = 123;
 
const userPin = await inquirer.prompt
(
    {
        message: "Enter your pin:",
        type: "number",
        name: "pin",
    }
);

if(userPin.pin === myPin)
{
    console.log("Correct pin code!!!");
    let userOption = await inquirer.prompt(
        {
            message: "Select any one option",
            type: "list",
            name: "option",
            choices: ["Withdraw","FastCash","CheckBalance"]
        }
    );
    if(userOption.option === "Withdraw"){
    let userAmount = await inquirer.prompt(
        {
            message: "Enter amount:",
            type: "number",
            name: "amount",
        }
    )
    if(userAmount.amount <= myBalance)
    {
        myBalance -= userAmount.amount
        console.log("Transaction Successful!!!");
        console.log("Your remaining balance is:",myBalance);
    }
    else{console.log("Insufficient Balance!!!")};
}
if(userOption.option === "FastCash")
{
    let userFastCash = await inquirer.prompt(
        {
            message: "Select amount",
            type: "list",
            name: "fastcash",
            choices: ["2000","3000","5000","10000"],
        }
    )
  myBalance -= userFastCash.fastcash
  console.log("Transaction Successful!!!");
  console.log("Your remaining balance is:",myBalance);
 }
  if(userOption.option === "CheckBalance")
 {
    console.log("Your current Balance is:",myBalance);    
 }
}

else {console.log("Incorrect pin code")};



