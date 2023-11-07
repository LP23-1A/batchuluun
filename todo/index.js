const taskcontainer = document.querySelector(".taskcontainer");
const dark = document.querySelector(".dark");
let buttons = document.querySelectorAll(".addbtn");

function add() {
  taskcontainer.style.display = "block";
}
function closedark() {
  taskcontainer.style.display = "none";
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = add;
}
let data = [];

function render(data) {
  const cards = document.getElementsByClassName("cards");
  cards[0].innerHTML = ""
  cards[1].innerHTML = ""
  cards[2].innerHTML = ""
  cards[3].innerHTML = ""
  let card = document.getElementsByClassName("card")
  let number = document.getElementsByClassName("number")
  number.innerText = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "Todo") {
      cards[0].innerHTML += createCard(data[i]);
      const todoNumber = document.getElementById("todoNumber")
      todoNumber.innerText = card.length
    } else if (data[i].status === "Inprogress"){
      cards[1].innerHTML += createCard(data[i]);
      const inProgress = document.getElementById("inProgress")
      inProgress.innerText = card.length
    } else if (data[i].status === "Stuck"){
      cards[2].innerHTML += createCard(data[i])
      const stuck = document.getElementById("stuckNumber")
      stuck.innerText = card.length
    } else if (data[i].status === "done"){
      cards[3].innerHTML += createCard(data[i])
      const Done = document.getElementById("doneNumber")
      Done.innerText = card.length
    } 
  }
  
}
function addCard() {
  const uid = Math.random();
  console.log(uid);
  const mockData = {
    id: uid,
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  let input = document.querySelector("input");
  let textarea = document.querySelector("textarea");
  let select = document.querySelector("select");
  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.priority = select.value;
  mockData.status = select.value;
  data.push(mockData);
  render(data);
  taskcontainer.style.display = "none";
}
function createCard(card) {
  // cards.innerHTML = "";
  const { title, desc, priority, id } = card;
  return ` <div  class="card">
<button class="done">v</button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class="priority">${priority}</div>
</div>
<button class="close" onclick= "closeBtn(${id})">x</button>
<button class="edit" onclick = "edit()">b</button>
</div>`;
}
render(data);
let cards = document.querySelector(".cards");
let empty = document.querySelector(".empty");
for (let i = 0; i < data.length; i++) {
  cards[0].addEventListener("dragstart", function (event) {
    console.log(event);
  });
  empty.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  empty.addEventListener("drop", function (event) {
    empty.prepend(cards[i]);
  });
}

function closeBtn(id) {
  const a = data.filter((e) => e.id !== id);
  data = a;
  render(data);
}
// function edit(e) {
//   taskcontainer.style.display = "block"
//   input.focus()
//   mockData.title = input.value
//   input.value = ""
// }

