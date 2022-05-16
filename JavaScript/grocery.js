const form = document.querySelector('form');
const ul=document.querySelector('ul');
const product=document.querySelector('#product');
const qty=document.querySelector('#qty');



form.addEventListener('submit',function(e){
    e.preventDefault();

const pro=product.value;
const qt=qty.value;
const newli=document.createElement('li');
newli.innerText= qt +' '+ pro;
ul.appendChild(newli);
product.value="";
qty.value="";

})

