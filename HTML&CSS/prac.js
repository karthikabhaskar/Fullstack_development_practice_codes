let arr = [[10, 0, 100,10], [0, 100, 10,100], [10, 50, 100,15], [50, 100, 10,55], [0, 100, 10,25],[10,100,100,50]];
console.log(arr);
let arr1 = [];

for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum = sum + arr[j][i];

    }
    arr1.push(sum);
}
console.log(arr1);

