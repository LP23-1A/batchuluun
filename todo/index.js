const taskcontainer = document.querySelector(".taskcontainer");
const dark = document.querySelector(".dark");
let buttons = document.querySelectorAll(".addbtn")

function add() {
    taskcontainer.style.display = "block"
}
function closedark() {
    taskcontainer.style.display = "none"
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = add
    
}
const data = [];

function render(data) {
    const cards = document.getElementsByClassName("cards")[0];
    const done = []
    cards.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
    cards.innerHTML += createCard(data[i]);
    }
}
function addCard() {
    const mockData = {
      title: "",
      desc: "",
      status: "",
      priority: "",
    };
    let input = document.querySelector("input")
    let textarea = document.querySelector("textarea")
    let select = document.querySelector("select")
    mockData.title =input.value;
    mockData.desc = textarea.value;
    mockData.status = "done";
    mockData.priority = select.value;
    data.push(mockData);
    render(data);
    console.log(data);

}
function createCard(card) {
    const { title, desc, priority } = card;
    return ` <div class="card">
<button class="done">v</button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class="priority">${priority}</div>
</div>
<button class="close">x</button>
</div>`;
}
render(data);
let cards = document.querySelector(".cards")
let empty = document.querySelector(".empty")
cards.addEventListener("dragstart", function(event){
    console.log(event);
})
empty.addEventListener("dragover", function(event){
    event.preventDefault()
})
empty.addEventListener("drop", function(event){
    empty.prepend(cards)
})