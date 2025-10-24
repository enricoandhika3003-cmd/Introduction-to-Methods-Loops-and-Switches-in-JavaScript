let greetings1 = "hello world!";
let upper = message1.toUpperCase();
console.log(upper);

let greetings2 = "hello world!";
let lower = message2.toLowerCase();
console.log(lower);

let str = "JavaScript is fun!";
console.log(str.startsWith("Java"));
console.log(str.startsWith("Script"));

let pattern = /^hello/;
let text = "hello world!";
console.log(pattern.test(text));

let secondPattern = /world$/;
console.log(secondPattern.test(text));

let passcode = "My pin is 6769";
let newPasscode = passcode.replace(/\d/g, "*");

for (let i=0; i<=10; i++) {
    console.log("No. " + i);
}

let berry = "banana";

switch (berry) {
    case "banana":
        console.log("Bananas are botanically berries");
        break;
    case "strawberries":
        console.log("Strawberries are NOT botanically berries");
        break;
    case "blackberries":
        console.log("Blackberries are NOT botanically berries");
        break;
    case "blueberries":
        console.log("Blueberries are NOT botanically berries");
        break;
    default:
        console.log("Whatever that is its NOT botanically a berry(s)");
}

console.log(new Date())
console.log(Math.floor(5.9))
console.log(Math.random())