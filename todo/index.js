let body = document.querySelector('body');
let taskcontainer = document.querySelector('.taskcontainer');
let container = document.querySelector('.container');
let boards = document.querySelector('.boards');
let buttons = document.querySelectorAll('.add-card');
let away = document.querySelector(".away");
let addtask = document.querySelector('.addtask');
let create = document.querySelector(".create")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = tab
}
function tab() {
   taskcontainer.style.display = "block"; 
}
function closetask() {
    taskcontainer.style.display = "none"
}
function add() {
    create.style.display = "flex"
}
away.onclick = closetask;
addtask.onclick = add;

