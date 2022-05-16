
///Functions

function rant(message) {
    for (let i = 0; i < 3; i++)
        console.log(message.toUpperCase());
}

rant("woop");

////////////isSnakeEyes Function
function isSnakeEyes(num1, num2) {
    if (num1 == 1 && num2 == 1)
        console.log("Snake Eyes!");
    else
        console.log("Not Snake Eyes!");
}

isSnakeEyes(1, 1);



/////////Multiple Function

function multiply(num1, num2) {

    return num1 * num2;
}
console.log(multiply(2, 3));


////////isShortsWeather function
function isShortsWeather(temperature) {
    if (temperature >= 75)
        return true;
    else
        return false;
}
console.log(isShortsWeather(80));

/////lastElement Function

function lastElement(arr) {
    if (arr.length == 0)
        return null;
    else
        return arr[arr.length - 1];
}

console.log(lastElement([]));

//////Capitalize Function

function capitalize(str) {

    let str1 = str[0].toUpperCase()
    console.log(str);
    let slic = str.slice(1, str.length)
    let str2 = str1 + slic;
    return str2;
}
capitalize('sdfghj')

//////// Sum of an array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}


////Days in a week

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function returnDay(num) {
    if (num >= 1 && num <= 7) {
        return days[num - 1]
    }
    else
        return null;
}

returnDay(7)


let arr = [1, 2, 3, 4, 5, 6, 7, ,,,,,,,,,,,8, 9, 10]


arr.forEach((ele, ind, arr) => {
    console.log(`${ind} have element of ${ele}`);
    console.log(arr);
})
let 