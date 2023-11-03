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
  const cards = document.getElementsByClassName("cards")[0];
  cards.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    cards.innerHTML += createCard(data[i]);
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
  mockData.status = "done";
  mockData.priority = select.value;
  data.push(mockData);
  render(data);
  taskcontainer.style.display = "none";
}
function createCard(card) {
  cards.innerHTML = "";
  const { title, desc, priority, id } = card;
  return ` <div id="${id}" class="card" draggable="true">
<button class="done">v</button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class="priority">${priority}</div>
</div>
<button class="close" onclick= "closeBtn(${id})">x</button>
</div>`;
}
render(data);
let cards = document.querySelector(".cards");
let empty = document.querySelector(".empty");
cards.addEventListener("dragstart", function (event) {
  console.log(event);
});
empty.addEventListener("dragover", function (event) {
  event.preventDefault();
});
empty.addEventListener("drop", function (event) {
  empty.prepend(cards);
});

let card = document.querySelector(".card");
let close = document.querySelector(".close");
function closeBtn(id) {
  const a = data.filter((e) => e.id !== id);
  data = a;
  render(data);
}
