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

let count = {
  todo: 0,
  inprogress: 0,
  stuck: 0,
  done: 0
}

function render(data) {
  const cards = document.getElementsByClassName("cards");
  cards[0].innerHTML = []
  cards[1].innerHTML = []
  cards[2].innerHTML = []
  cards[3].innerHTML = []
  

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "To do") {
      cards[0].innerHTML += createCard(data[i]);
      let todoNumber = document.querySelector("#todoNumber")
    } else if (data[i].status === "Inprogress"){
      cards[1].innerHTML += createCard(data[i]);
      let inProgress = document.querySelector("#inProgress")
    } else if (data[i].status === "Stuck"){
      cards[2].innerHTML += createCard(data[i])
      let stuck = document.querySelector("#stuck")
    } else if (data[i].status === "done"){
      cards[3].innerHTML += createCard(data[i])
     let Done = document.querySelector("#done")
    } 
  }
}

function addCard() {
  const uid = "id-"+Math.random();
  console.log(uid);
  const mockData = {
    id: uid,
    title: "",
    desc: "",
    priority: "",
    status: "",
  };

  let input = document.querySelector("input");
  let textarea = document.querySelector("textarea");
  let select = document.querySelectorAll("select");
  let priority = document.querySelector("priority")
  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.priority = select[1].value;
  mockData.status = select[0].value;
  if (mockData.status === "To do") {
    count.todo += 1
  } else if (mockData.status === "Inprogress"){
    count.inprogress += 1
  } else if (mockData.status === "Stuck"){
    count.stuck += 1
  } else if (mockData.status === "done"){
    count.done += 1
  }
  todoNumber.innerHTML = count.todo
  inProgress.innerHTML = count.inprogress
  stuckNumber.innerHTML = count.stuck
  doneNumber.innerHTML = count.done
  data.push(mockData);
  render(data);
  taskcontainer.style.display = "none";
}
function createCard(card) {
  const { title, desc, priority, id } = card;
  return ` <div  class="card">
<button class="done">v</button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class= "status"></div>
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
  box[1].addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  box[1].addEventListener("drop", function (event) {
    box.prepend(box);
  });
}

function closeBtn(id) {
  let elementId = "id" + id
  console.log(elementId);
  let element = null
  const a = data.filter((e) => {
   if (e.id === elementId) {
    element = e
   } else {
    return true
   }
   return false

  });
  data = a;
  if (element.status === "To do") {
    count.todo -= 1
  } else if(element.status === "Inprogress") {
    count.inprogress -= 1
  } else if (element.status === "Stuck") {
    count.stuck -= 1
  } else if (element.status === "done"){
    count.done -= 1
  }
  todoNumber.innerHTML = count.todo
  inProgress.innerHTML = count.inprogress
  stuckNumber.innerHTML = count.stuck
  doneNumber.innerHTML = count.done
  render(data);

}
// function edit(id) {
//   taskcontainer.style.display = "block"
//   const a = data.filter((e) => e.id === id);
//   data = a;
//   render(data)
// }


