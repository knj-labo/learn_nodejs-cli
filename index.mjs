import readline from "node:readline/promises";

const rl = readline.createInterface({
    terminal: true,
    input: process.stdin,
    output: process.stdout,
});

const answer = await rl.question("What is your name? ");
console.log("your name is: " + answer);
rl.close();