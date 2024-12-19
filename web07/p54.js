function greeting(name) {
  console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greeting);


console.log("Start");

setTimeout(() => {
    console.log("This is a delayed message");
}, 1000);

console.log("End");
