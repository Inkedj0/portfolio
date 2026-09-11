let titel1 = document.querySelector("#titel1");

titel1.addEventListener("click", changeColor);


function changeColor(){
    titel1.style.backgroundColor = "red";
};

let home = document.querySelector("#home");

home.addEventListener("click", function(){
    home.innerHTML = "Je bent hier al!";
});

let myInput = document.querySelector("#myInput");
let knop2 = document.querySelector("#knop2");
let bodyhome = document.querySelector("#bodyhome");

knop2.addEventListener("click", leesInput);

function leesInput() {  
    console.log(myInput.value);
if (myInput.value == "Vampire"){
    bodyhome.style.backgroundImage = 'none';
    bodyhome.style.backgroundColor = "red";
}};