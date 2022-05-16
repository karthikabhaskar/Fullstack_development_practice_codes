let input = prompt("What would you like to do?\n Enter you choice \n * List\n * Add \n * Delete \n * Quit");
const todos = ['collect chicken', 'Go to sleep ASAP'];



while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("**********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log("**********************")
    }
    else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to th list`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("Ok, Enter an index to delete?"));
        if (!Number.isNaN(index)) {

            const deleted = todos.splice(index, 1);
            console.log(`Ok!!!, deleted ${deleted}`);
        }
        else
            console.log('Unknown index!!');
    }
    input = prompt('What is you choice?')
}
console.log("OK, You Quit the App!!!");


