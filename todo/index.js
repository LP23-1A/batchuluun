const body = document.querySelector('body');
const container = document.createElement('div');
const boards = document.createElement('div');
const text = document.createElement('text')
const buttons = document.createElement('button')

container.classList.add('container')
boards.classList.add('board')
text.classList.add('text')

body.appendChild(container)
container.appendChild(boards)
boards.appendChild(text)
boards.appendChild(buttons)

text.innerHTML = "<h2>To do 0</h2>"
buttons.innerText = " +  Add card"
