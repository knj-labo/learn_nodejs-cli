import inquirer from "inquirer";

const addQuestion = async () =>{
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the item?"
        },
        {
            type: "list",
            name: "live",
            message: "Where do you live?",
            choices: ["Japan", "Korean", "Other"]
        },
    ]);
    console.log("Your name is " + answers.name)
    console.log("You live in " + answers.live)
}

const flags = [];

process.argv.forEach(arg => {
    if (/^-/.test(arg)) {
        flags.push(arg.replaceAll("-", ""));
    }
});

if (flags.includes("a") || flags.includes("add")) {
    addQuestion();
} else {
    addQuestion();
}
