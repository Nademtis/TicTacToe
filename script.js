"use strict"

window.addEventListener("load", start())

function start(){
    console.log("js");
    makeBoardClickable();
}

function makeBoardClickable(){
    document.querySelector("#board")
    .addEventListener("click", boardClicked)
}

function boardClicked(event){
    console.log('board clicked');
}