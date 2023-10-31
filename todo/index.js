let body = document.querySelector('body');
let taskcontainer = document.querySelector('.taskcontainer');
let container = document.querySelector('.container');
let box = document.querySelector('.box');
let buttons = document.querySelectorAll('.add-card');
let dark = document.querySelector(".dark");
let addtask = document.querySelector('.addtask');
let create = document.querySelector(".create");
let empty = document.querySelector(".empty")

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

dark.onclick = closetask;
addtask.onclick = add;

create.addEventListener("dragstart", function(event){
    console.log(event);
})
empty.addEventListener("dragover", function(event){
    event.preventDefault()
})
empty.addEventListener("drop", function(event){
    empty.prepend(create)
})