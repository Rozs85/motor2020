// adat lekérés 
function newUser(btn) 
{//alert("Hello! I am an alert box!!");
let form = btn.parentElement;
let inputs = form.querySelector("input.form-control") ;
let data = {} ;
for (let i = 0; i < inputs.lenght; i++)
{ data[inputs[i].name] = inputs[i].value ;
 }
console.log(data);
}