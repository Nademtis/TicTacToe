"use strict"

window.addEventListener("load", start())

function start() {
    console.log("js");
    makeBoardClickable();
}

function makeBoardClickable() {
    document.querySelector("#board")
        .addEventListener("click", boardClicked)
}

function boardClicked(event) {
    console.log('board clicked');
    const cell = event.target

    if (cell.classList.contains("cell")) {
        console.log(cell);

        const row = cell.dataset.row
        const col = cell.dataset.col
        console.log(`clicked on row:  ${row} and col: ${col} `);
    }

}

// ***************** MODEL *****************

const model = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

function writeToCell(row, col, value) {
    model[row][col] = value;
}

function readFromCell(row, col) {
    return model[row][col];
}

