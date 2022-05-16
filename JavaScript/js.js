let appy = "hello Happiness";
// document.write(appy)
console.log(appy)
console.log(12345);
document.write(1234567)
// alert('I am Karthika')
// prompt('who am I?')

// If condition

let num = 10;
if (num % 2 == 0) {
    console.log("even");
}


// if-else condition

let num1 = 7;
if (num1 % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// elese-if condition
let day = "Tuesday";
if (day === "Monday") {
    console.log("Start you day");
}
else if (day === "Tuesday") {
    console.log("A busy day");
}
else {
    console.log("enjoy your week ahead");
}



//challenge

function getColor(phrase) {

    if (phrase === "stop") {
        console.log("red");
    }

    else if (phrase === "slow") {
        console.log("yellow");
    }
    else if (phrase === "go") {
        console.log("green");
    }
    else
        console.log("purple");

}



// Change the value of num, so that "YOU GOT ME!" prints out
const num2 = 102;


if (num2 <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num2 < 103) {
        if (num2 % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}


// Truthy and falsy

if (false)
    console.log("Truthy");
else
    console.log("Falsy");

if (undefined)
    console.log("Truthy");
else
    console.log("Falsy");

if (0)
    console.log("Truthy");
else
    console.log("Falsy");

if ("")
    console.log("Truthy");
else
    console.log("Falsy");

if (null)
    console.log("Truthy");
else
    console.log("Falsy");

if (NaN)
    console.log("Truthy");
else
    console.log("Falsy");




// logical AND

const mystery = 'Publicc7c';
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

//array
let lottoNumbers = [1, 2, 3, 4, 5, 6];

console.log(lottoNumbers);



const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(leaderboard);




const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift("The Moon");
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets);

planets.splice(1, 0, "venus");

planets.splice(1, 1);
console.log(planets);



//object creation

let product={
    name:"Gummy Bears",
    inStock:true,
    price: 1.99,
    flavors:["grape","apple","cherry"]
};

//challeges



const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
let fullAddress= restaurant.address+","+restaurant.city+","+restaurant.state+restaurant.zipcode; 

console.log(fullAddress);


//for loops
for(let i=1; i<=6; i++)
console.log("Da ba dee da ba daa");


for(let i=5;i>=0; i--)
console.log(i*5);


///challenge

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i=0;i<people.length; i++)
console.log(people[i].toUpperCase());











