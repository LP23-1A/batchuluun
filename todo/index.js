const taskcontainer = document.querySelector(".taskcontainer");
const dark = document.querySelector(".dark");
let buttons = document.querySelectorAll(".addbtn");
const addtask = document.querySelector(".addtask");

function add() {
  taskcontainer.style.display = "block";
  addtask.onclick = () => addCard(false);
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
  done: 0,
};

function render(data) {
  const cards = document.getElementsByClassName("cards");
  (cards[0].innerHTML = ""),
    (cards[1].innerHTML = ""),
    (cards[2].innerHTML = ""),
    (cards[3].innerHTML = "");
  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "Todo") {
      cards[0].innerHTML += createCard(data[i]);
    } else if (data[i].status === "Inprogress") {
      cards[1].innerHTML += createCard(data[i]);
    } else if (data[i].status === "Stuck") {
      cards[2].innerHTML += createCard(data[i]);
    } else if (data[i].status === "Done") {
      cards[3].innerHTML += createCard(data[i]);
    }
  }
  dragAndDrop();
}
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let select = document.querySelectorAll("select");

function addCard(isEdit, id) {
  // cards.innerHTML = ""
  const uid = "id-" + Math.random();
  const mockData = {
    id: uid,
    title: "",
    desc: "",
    priority: "",
    status: "",
  };
  mockData.title = input.value;
  mockData.desc = textarea.value;
  mockData.priority = select[1].value;
  mockData.status = select[0].value;
  taskcontainer.style.display = "none";
  input.value = "";
  textarea.value = "";
  if (isEdit) {
    data = data.map((el) => {
      if (el.id === id) {
        mockData.id = id;
        return mockData;
      }
      return el;
    });
  } else {
    data.push(mockData);
    if (mockData.status === "Todo") {
      count.todo += 1;
    } else if (mockData.status === "Inprogress") {
      count.inprogress += 1;
    } else if (mockData.status === "Stuck") {
      count.stuck += 1;
    } else if (mockData.status === "Done") {
      count.done += 1;
    }

    todoNumber.innerHTML = count.todo;
    inProgress.innerHTML = count.inprogress;
    stuckNumber.innerHTML = count.stuck;
    doneNumber.innerHTML = count.done;
  }
  render(data);
}
function createCard(card) {
  const { title, desc, priority, id } = card;
  return ` <div  class="card" id="${id}" draggable="true">
<button class="done" onclick="addDone(${id})" ><img src="./img1/icons8-done-24.png" alt=""></button>
<div class="info">
<p>${title}</p>
<span>${desc}</span>
<div class= "status"></div>
<div class="priority">${priority}</div>
</div>
<div class="doneEdit">
<button class="close" onclick= "closeBtn(${id})"><img src="./img1/icons8-remove-24.png" alt=""></button>
<button class="edit" onclick = "setData('${id}', true)"><img src="./img1/icons8-edit-24.png" alt=""></button>
</div>

</div>`;
}
render(data);
function closeBtn(id) {
  let elementId = "id" + id;
  let element = null;
  const a = data.filter((e) => {
    if (e.id === elementId) {
      element = e;
    } else {
      return true;
    }
    return false;
  });
  data = a;
  if (element.status === "Todo") {
    count.todo -= 1;
  } else if (element.status === "Inprogress") {
    count.inprogress -= 1;
  } else if (element.status === "Stuck") {
    count.stuck -= 1;
  } else if (element.status === "Done") {
    count.done -= 1;
  }

  todoNumber.innerHTML = count.todo;
  inProgress.innerHTML = count.inprogress;
  stuckNumber.innerHTML = count.stuck;
  doneNumber.innerHTML = count.done;
  render(data);
}
function dragAndDrop() {
  const card = document.querySelectorAll(".card");
  const boxs = document.querySelectorAll(".box");
  let draggedItem = null;
  card.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.target.value;
      draggedItem = event.target;
      event.dataTransfer.setData("text", event.target.getAttribute("id"));
    });
    card.addEventListener("dragend", () => {
      draggedItem = null;
    });
  });
  boxs.forEach((box, index) => {
    box.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    box.addEventListener("dragenter", (event) => {
      event.preventDefault();
      if (draggedItem) {
        console.log(draggedItem);
        const draggingBoard = draggedItem.parentNode;
        if (draggingBoard !== event.currentTarget) {
          event.currentTarget.querySelector(".cards").appendChild(draggedItem);
        }
      }
    });
    box.addEventListener("dragleave", () => {});
    box.addEventListener("drop", (event) => {
      event.preventDefault();
      let id = draggedItem.getAttribute("id");
      console.log(draggedItem.getAttribute("id"));
      data.map((el) => {
        if (el.id === id) {
          if (el.status === "Todo") {
            count.todo -= 1;
          } else if (el.status === "Inprogress") {
            count.inprogress -= 1;
          } else if (el.status === "Stuck") {
            count.stuck -= 1;
          } else if (el.status === "Done") {
            count.done -= 1;
          }
          el.status = id;
          if (index === 0) {
            el.status = "Todo";
          } else if (index === 1) {
            el.status = "Inprogress";
          } else if (index === 2) {
            el.status = "Stuck";
          } else if (index === 3) {
            el.status = "Done";
          }
          if (el.status === "Todo") {
            count.todo += 1;
          } else if (el.status === "Inprogress") {
            count.inprogress += 1;
          } else if (el.status === "Stuck") {
            count.stuck += 1;
          } else if (el.status === "Done") {
            count.done += 1;
          }
          console.log(index);
        }
      });
      todoNumber.innerHTML = count.todo;
      inProgress.innerHTML = count.inprogress;
      stuckNumber.innerHTML = count.stuck;
      doneNumber.innerHTML = count.done;
    });
  });
}

render(data);
function setData(id) {
  taskcontainer.style.display = "block";
  const findEl = data.find((el) => el.id === id);
  input.value = findEl.title;
  textarea.value = findEl.desc;
  addtask.onclick = () => addCard(true, id);
}

function addDone(id) {
  let addId = "id" + id;
  const donelist = data.map((item) => {
    if (item.id === addId) {
      if (item.status === "Todo") {
        count.todo -= 1;
      } else if (item.status === "Inprogress") {
        count.inprogress -= 1;
      } else if (item.status === "Stuck") {
        count.stuck -= 1;
      } else if (item.status === "Done") {
        count.done -= 1;
      }
      item.status = "Done";
      if (item.status === "Done") {
        count.done += 1;
      }
      doneNumber.innerHTML = count.done;
      todoNumber.innerHTML = count.todo;
      stuckNumber.innerHTML = count.stuck;
      inProgress.innerHTML = count.inprogress;
    }
    return item;
  });
  render(donelist);
}
