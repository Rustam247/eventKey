// const key = document.getElementById("key");
// key.addEventListener("keypress", (event) =>{
//     console.log (event.key) ;
// });

const h1 = document.getElementById("h1");
document.addEventListener ("keypress", (event) =>{
    h1.innerText = event.key
});


const codeh2 = document.getElementById("codeh2");
document.addEventListener ("keypress", (event) =>{
    codeh2.innerText = event.code
});

const whichh2 = document.getElementById("whichh2");
document.addEventListener ("keypress", (event) =>{
    whichh2.innerText = event.which
});


