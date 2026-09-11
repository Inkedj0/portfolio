let titel2 = document.querySelector("#titel2");

titel2.addEventListener("click", changeColor);

function changeColor(){
    titel2.style.backgroundColor = "red";
}

let songs = document.querySelector("#songs");

songs.addEventListener("click", function(){
    songs.innerHTML = "Je bent hier al!";
});

if (titel2.style.backgroundColor == "red"){
    titel2.style.backgroundColor = "#1C2541";
};