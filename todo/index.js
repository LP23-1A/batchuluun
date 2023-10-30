let body = document.querySelector('body')
let taskcontainer = document.querySelector('.taskcontainer')
let container = document.querySelector('.container')
let boards = document.querySelector('.boards')
let buttons = document.querySelector('button')
buttons.onclick = tab
function tab() {
    taskcontainer.style.display = "flex"
}
