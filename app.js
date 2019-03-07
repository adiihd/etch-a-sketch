const container = document.querySelector("#container");
let start = document.querySelector("#start");
const black = document.querySelector("#black");
const color = document.querySelector("#start");
const div = document.createElement('div');



function startGrid(size){
    for(let i = 0; i < size; i++){
        container.appendChild(div);
    }
}