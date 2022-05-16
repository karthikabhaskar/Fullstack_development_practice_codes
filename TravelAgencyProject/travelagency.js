
let arr = []
let form = document.querySelector('.formik')
form.addEventListener('submit', () => {

    let nameInput = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let val = [nameInput, email, password]
    arr.push(val)
    localStorage.setItem('data', JSON.stringify(arr))

})

let booknowbtn = document.querySelectorAll('.booknowbtn');
for (let x of booknowbtn) {
    x.addEventListener('click', () => {
        alert("Booked Successfully!!!!!!!")
    })
}

let bookform = document.querySelector('.bookform');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let whereto = document.querySelector('#whereto');
let howmany = document.querySelector('#howmany');
let arrivals = document.querySelector('#arrivals');
let leaving = document.querySelector('#Leaving');
let booknowbtn1 = document.querySelector('.booknowbtn1');

booknowbtn1.addEventListener('click', () => {
    console.log(fname.value);
    console.log(lname.value);
    console.log(whereto.value);
    console.log(howmany.value);
    console.log(fname.value);
    if (fname.value !== "" && lname.value !== "" && whereto.value !== "" && howmany.value !== "" && arrivals.value !== "" && leaving.value !== "")

        alert("Booked Successfully!!!!!!!");
    else
        alert("Enter all the details");
})


let arr1 = []
let booknowform = document.querySelector('.booknowform')
booknowform.addEventListener('submit', () => {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let whereto = document.getElementById("whereto").value;
    let howmany = document.getElementById("howmany").value;
    let arrivals = document.getElementById("arrivals").value;
    let leaving = document.getElementById("Leaving").value;
    let val = [fname, lname, whereto, howmany, arrivals, leaving]
    arr1.push(val)
    localStorage.setItem('data', JSON.stringify(arr))

})