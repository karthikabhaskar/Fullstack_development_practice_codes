// const button = document.querySelector('#butt');
// button.addEventListener('click', () => { alert("you clicked me") })
// //-------------------------------------

const button1 = document.querySelector('#color')

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
    //  document.body.style.backgroundColor = colorChange;
}


//let buttons = document.querySelectorAll('button');
let btn = document.querySelectorAll('button');


for (let button2 of btn) {
    button2.addEventListener('click', function () {

        button2.style.backgroundColor = randomColor();
    })
}

let h1 = document.querySelectorAll('h1');

for (let h of h1) {
    h.addEventListener('click', function () {

        h.style.backgroundColor = randomColor();
    })
}

