function createTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
let boardName = [
  {
    title: "Todo",
    arr: [
      {
        title: "task1",
        description: "desc",
        priority: "Medium",
        level: 1,
      },
      {
        title: "task2",
        description: "desc",
        priority: "High",
        level: 2,
      },
    ],
  },
  {
    title: "Inprocess",
    arr: [],
  },
  {
    title: "Stuck",
    arr: [],
  },
  {
    title: "Done",
    arr: [],
  },
];
let priority = ["Low", "Medium", "High"];
const root = document.getElementById("root");
// new container
const logo = createTag("div", "logo");
const logoImg = createTag("img");
logoImg.setAttribute(
  "src",
  "https://assets-global.website-files.com/64d1a97b791d8ca9bb004633/64d341b746d118ef09197a8e_Logo.svg"
);
logo.appendChild(logoImg);
root.appendChild(logo);
const header = createTag("div", "header");
const headerTitle = createTag("h2");
headerTitle.innerText = "Leap 1E class";
const editTitle = createTag("i");
editTitle.setAttribute("class", "fa-regular fa-pen-to-square");
editTitle.addEventListener("click", () => {
  let editTit = prompt("Please enter your title", headerTitle.innerText);
  while (editTit == "") {
    editTit = prompt("Please enter your title");
  }
  headerTitle.innerText = editTit;
});
const addBoard = createTag("div", "addBoard");
const addBoardIcon = createTag("i");
addBoardIcon.setAttribute("class", "fa-solid fa-plus");
const addBoardSpan = createTag("p");
addBoardIcon.innerText = "Add board";
addBoard.appendChild(addBoardIcon);
addBoard.appendChild(addBoardSpan);
addBoard.addEventListener("click", () => {
  let addBoardName = prompt("Please enter your boarName");
  while (addBoardName == "") {
    addBoardName = prompt("Please enter your boarName");
  }
  let v = boardName.pop();
  boardName.push({ title: addBoardName, arr: [] });
  boardName.push(v);
  console.log(boardName);
  refresh();
});
// addBoard.innerHTML = addBoardIcon + " Add board";
header.appendChild(headerTitle);
header.appendChild(editTitle);
header.appendChild(addBoard);
const container = createTag("div", "container");
root.appendChild(container);
// new boards
container.appendChild(header);
const boards = createTag("div", "boards");
container.appendChild(boards);

const addSection = createTag("div");
root.appendChild(addSection);

function addForm() {
  const backdrop = createTag("div", "backdrop");
  addSection.appendChild(backdrop);
  const away = createTag("div", "away");
  const addTask = createTag("div", "addtask");
  backdrop.appendChild(away);
  backdrop.appendChild(addTask);
  away.addEventListener("click", () => {
    addSection.innerHTML = "";
    titleInput.value = "";
    descInput.value = "";
    prioInput.value = "";
    statInput.value = "";
    titleInput.style.border = "1px solid";
    titleInput.setAttribute("placeholder", "");
    descInput.style.border = "1px solid";
    descInput.setAttribute("placeholder", "");
  });
  // new form
  const form = createTag("form");
  // new form head
  const formHead = createTag("h1");

  form.appendChild(formHead);
  // title input
  const formTitleDiv = createTag("div");
  const titleLab = createTag("label");
  titleLab.innerText = "Title";
  titleLab.setAttribute("for", "title");
  const titleInput = createTag("input", "title", "title");
  formTitleDiv.appendChild(titleLab);
  formTitleDiv.appendChild(titleInput);
  // title description
  const formDescDiv = createTag("div");
  const descLab = createTag("label");
  descLab.innerText = "Desciption";
  descLab.setAttribute("for", "desciption");
  const descInput = createTag("textarea", "desciption", "desciption");
  formDescDiv.appendChild(descLab);
  formDescDiv.appendChild(descInput);
  // status
  const stat = createTag("div");

  const statTitle = createTag("label");
  statTitle.innerText = "Status";
  statTitle.setAttribute("for", "status");
  stat.appendChild(statTitle);
  const statInput = createTag("select", "desciption", "desciption");
  statInput.value = "";
  count = 0;
  for (let j = 0; j < boardName.length; j++) {
    const statOption = createTag("option");
    statOption.setAttribute("value", j);
    statOption.innerText = boardName[j].title;
    count++;
    statInput.appendChild(statOption);
  }
  stat.appendChild(statInput);
  // priotity
  const prio = createTag("div");

  const prioTitle = createTag("label");
  prioTitle.innerText = "Priority";
  prioTitle.setAttribute("for", "Priority");
  prio.appendChild(prioTitle);
  const prioInput = createTag("select", "desciption", "desciption");
  prioInput.value = "";
  for (let k = 0; k < priority.length; k++) {
    const prioOption = createTag("option");
    prioOption.setAttribute("value", k);
    prioOption.innerText = priority[k];
    prioInput.appendChild(prioOption);
  }
  prio.appendChild(prioInput);

  form.appendChild(formTitleDiv);
  form.appendChild(formDescDiv);
  form.appendChild(stat);
  form.appendChild(prio);
  const addButton = createTag("button", "addButton");
  addButton.setAttribute("type", "submit");
  addButton.innerText = "Add Task";
  form.appendChild(addButton);

  addTask.appendChild(form);
  // add task event
  addButton.addEventListener("click", (z) => {
    z.preventDefault();
    let obj = {};
    titleInput.addEventListener("keyup", () => {
      if (titleInput.value == "") {
        titleInput.style.border = "2px solid red";
      } else {
        titleInput.style.border = "1px solid black";
      }
    });
    descInput.addEventListener("keyup", () => {
      if (descInput.value == "") {
        descInput.style.border = "2px solid red";
      } else {
        descInput.style.border = "1px solid black";
      }
    });
    prioInput.addEventListener("click", () => {
      prioInput.style.border = "1px solid black";
    });
    statInput.addEventListener("click", () => {
      statInput.style.border = "1px solid black";
    });
    if (titleInput.value == "") {
      titleInput.style.border = "2px solid red";
      titleInput.setAttribute("placeholder", "Утга оруулна уу");
    }
    if (descInput.value == "") {
      descInput.style.border = "2px solid red";
      descInput.setAttribute("placeholder", "Утга оруулна уу");
    }
    if (statInput.value == "") {
      statInput.style.border = "2px solid red";
    }
    if (prioInput.value == "") {
      prioInput.style.border = "2px solid red";
    }
    if (
      titleInput.value != "" &&
      descInput.value != "" &&
      prioInput.value != "" &&
      statInput.value != ""
    ) {
      titleInput.style.border = "1px solid";
      titleInput.setAttribute("placeholder", "");
      const addIndex = statInput.value;
      descInput.style.border = "1px solid";
      descInput.setAttribute("placeholder", "");
      obj.title = titleInput.value;
      titleInput.value = "";
      obj.description = descInput.value;
      descInput.value = "";
      obj.level = prioInput.value;
      console.log("level=", obj.level);
      obj.priority = priority[prioInput.value];
      boardName[addIndex].arr.push(obj);
      addSection.innerHTML = "";
      // boardName[addIndex].arr.sort((a, b) => {
      //   // console.log(a.priority, b.priority);
      //   if (b.level < a.level) {
      //     return -1;
      //   } else {
      //     return 1;
      //   }
      // });
      // console.log(boardName);
      prioInput.value = "";
      statInput.value = "";
      // backdrop.style.display = "none";
      refresh();
    }
  });
}
function editForm(num1, num2) {
  const backdrop = createTag("div", "backdrop");
  addSection.appendChild(backdrop);
  const away = createTag("div", "away");
  const addTask = createTag("div", "addtask");
  backdrop.appendChild(away);
  backdrop.appendChild(addTask);
  away.addEventListener("click", () => {
    addSection.innerHTML = "";
    titleInput.value = "";
    descInput.value = "";
    prioInput.value = "";
    statInput.value = "";
    titleInput.style.border = "1px solid";
    titleInput.setAttribute("placeholder", "");
    descInput.style.border = "1px solid";
    descInput.setAttribute("placeholder", "");
  });
  // new form
  const form = createTag("form");
  // new form head
  const formHead = createTag("h1");

  form.appendChild(formHead);
  // title input
  const formTitleDiv = createTag("div");
  const titleLab = createTag("label");
  titleLab.innerText = "Title";
  titleLab.setAttribute("for", "title");
  const titleInput = createTag("input", "title", "title");
  titleInput.value = boardName[num1].arr[num2].title;
  formTitleDiv.appendChild(titleLab);
  formTitleDiv.appendChild(titleInput);
  // title description
  const formDescDiv = createTag("div");
  const descLab = createTag("label");
  descLab.innerText = "Desciption";
  descLab.setAttribute("for", "desciption");
  const descInput = createTag("textarea", "desciption", "desciption");
  descInput.value = boardName[num1].arr[num2].description;
  formDescDiv.appendChild(descLab);
  formDescDiv.appendChild(descInput);
  // status
  const stat = createTag("div");

  const statTitle = createTag("label");
  statTitle.innerText = "Status";
  statTitle.setAttribute("for", "status");
  stat.appendChild(statTitle);
  const statInput = createTag("select", "desciption", "desciption");
  statInput.value = boardName[num1].title;
  count = 0;
  for (let j = 0; j < boardName.length; j++) {
    const statOption = createTag("option");
    statOption.setAttribute("value", j);
    statOption.innerText = boardName[j].title;
    count++;
    statInput.appendChild(statOption);
  }
  stat.appendChild(statInput);
  // priotity
  const prio = createTag("div");

  const prioTitle = createTag("label");
  prioTitle.innerText = "Priority";
  prioTitle.setAttribute("for", "Priority");
  prio.appendChild(prioTitle);
  const prioInput = createTag("select", "desciption", "desciption");
  const prioOptionStart = createTag("option");
  prioOptionStart.setAttribute("value", "");
  prioOptionStart.setAttribute("selected", "");
  prioOptionStart.setAttribute("disabled", "");
  prioOptionStart.setAttribute("hidden", "");
  prioInput.appendChild(prioOptionStart);
  prioOptionStart.innerText = "Select priority";
  for (let k = 0; k < priority.length; k++) {
    const prioOption = createTag("option");
    prioOption.setAttribute("value", k);
    prioOption.innerText = priority[k];
    prioInput.appendChild(prioOption);
  }
  // prioInput.innerText = boardName[num1].arr[num2].priority;
  // prioInput.value = boardName[num1].arr[num2].level;
  // console.log(boardName[num1].arr[num2].priority);
  prio.appendChild(prioInput);

  form.appendChild(formTitleDiv);
  form.appendChild(formDescDiv);
  form.appendChild(stat);
  form.appendChild(prio);
  const saveButton = createTag("button", "addButton");
  saveButton.setAttribute("type", "submit");
  saveButton.innerText = "Save list";
  form.appendChild(saveButton);

  addTask.appendChild(form);
  // add task event
  saveButton.addEventListener("click", (z) => {
    z.preventDefault();
    let obj = {};
    titleInput.addEventListener("keyup", () => {
      if (titleInput.value == "") {
        titleInput.style.border = "2px solid red";
      } else {
        titleInput.style.border = "1px solid black";
      }
    });
    descInput.addEventListener("keyup", () => {
      if (descInput.value == "") {
        descInput.style.border = "2px solid red";
      } else {
        descInput.style.border = "1px solid black";
      }
    });
    prioInput.addEventListener("click", () => {
      prioInput.style.border = "1px solid black";
    });
    statInput.addEventListener("click", () => {
      statInput.style.border = "1px solid black";
    });
    if (titleInput.value == "") {
      titleInput.style.border = "2px solid red";
      titleInput.setAttribute("placeholder", "Утга оруулна уу");
    }
    if (descInput.value == "") {
      descInput.style.border = "2px solid red";
      descInput.setAttribute("placeholder", "Утга оруулна уу");
    }
    if (statInput.value == "") {
      statInput.style.border = "2px solid red";
    }
    if (prioInput.value == "") {
      prioInput.style.border = "2px solid red";
    }
    if (
      titleInput.value != "" &&
      descInput.value != "" &&
      prioInput.value != "" &&
      statInput.value != ""
    ) {
      titleInput.style.border = "1px solid";
      const addIndex = statInput.value;
      titleInput.setAttribute("placeholder", "");
      descInput.style.border = "1px solid";
      descInput.setAttribute("placeholder", "");
      obj.title = titleInput.value;
      titleInput.value = "";
      obj.description = descInput.value;
      descInput.value = "";
      obj.level = prioInput.value;
      console.log("level=", obj.level);
      obj.priority = priority[prioInput.value];
      if (addIndex == num1) {
        boardName[num1].arr[num2] = obj;
      } else {
        boardName[num1].arr.splice(num2, 1);
        boardName[addIndex].arr.push(obj);
      }
      addSection.innerHTML = "";
      // boardName[addIndex].arr.sort((a, b) => {
      //   // console.log(a.priority, b.priority);
      //   if (b.level < a.level) {
      //     return -1;
      //   } else {
      //     return 1;
      //   }
      // });
      // console.log(boardName);
      prioInput.value = "";
      statInput.value = "";
      // backdrop.style.display = "none";
      refresh();
    }
  });
}
let dragIndex1, dragIndex2;
function refresh() {
  boards.innerHTML = "";
  // console.log(boardName);
  boardName.map((e, boardIndex) => {
    // for(i=0; i<boarname.length;i++)
    // console.log("hi=", e.title);
    const board = createTag("div", "board");
    board.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    board.addEventListener("drop", (e) => {
      e.preventDefault();
      addDragCard(boardIndex);
    });
    const boardHead = createTag("div", "board-header");
    // boardHead.innerText =
    const boardLength = createTag("p");
    boardLength.innerText = e.title + " - " + e.arr.length;
    const titleIcons = createTag("div", "titleIcons");
    const titleRemove = createTag("div", "done");
    const titleRemoveIcon = createTag("i");
    titleRemoveIcon.setAttribute("class", "fa-solid fa-x");
    titleRemove.appendChild(titleRemoveIcon);
    titleRemove.addEventListener("click", () => {
      removeBoard(boardIndex);
    });
    const titleEdit = createTag("div", "done");
    const titleEditIcon = createTag("i");
    titleEditIcon.setAttribute("class", "fa-regular fa-pen-to-square");
    titleEdit.appendChild(titleEditIcon);
    titleIcons.appendChild(titleRemove);
    titleIcons.appendChild(titleEdit);
    titleEdit.addEventListener("click", () => {
      if (boardIndex == boardName.length - 1) {
        alert("Done өөрчлөх боломжгүй");
      } else {
        editBoardTitle(boardIndex);
      }
    });
    boardHead.appendChild(boardLength);
    boardHead.appendChild(titleIcons);
    board.appendChild(boardHead);
    const cards = createTag("div", "details");
    const list = e.arr;
    list.sort((a, b) => {
      // console.log(a.priority, b.priority);
      if (b.level < a.level) {
        return -1;
      } else {
        return 1;
      }
    });
    e.arr.map((event, indi) => {
      console.log("index", indi);
      const card = createTag("div", "card");
      card.setAttribute("draggable", "true");
      card.addEventListener("dragstart", () => {
        // ev.preventDefault();
        dragIndex1 = boardIndex;
        dragIndex2 = indi;
        // console.log(dragIndex1, dragIndex2);
      });
      const detail = createTag("div", "card-details");
      const detailTitle = createTag("h4", "detail-title");
      detailTitle.innerText = event.title;
      const detailDesc = createTag("p", "detail-desc");
      detailDesc.innerText = event.description;
      const detailPrio = createTag("div", "detail-priority");
      detailPrio.innerText = event.priority;
      detail.appendChild(detailTitle);
      detail.appendChild(detailDesc);
      detail.appendChild(detailPrio);
      const done = createTag("div", "done");
      // done.innerText = "i";
      const doneIcon = createTag("i");
      doneIcon.setAttribute("class", "fa-solid fa-check");
      done.addEventListener("click", () => {
        boardName[boardName.length - 1].arr.push(list[indi]);
        list.splice(indi, 1);
        refresh();
      });
      done.appendChild(doneIcon);
      // done
      card.appendChild(done);
      card.appendChild(detail);
      const actions = createTag("div", "actions");
      const remove = createTag("div", "done");
      const removeIcon = createTag("i");
      removeIcon.setAttribute("class", "fa-solid fa-x");
      remove.appendChild(removeIcon);
      remove.addEventListener("click", () => {
        removeCard(boardIndex, indi);
        refresh();
      });
      // const remove = createTag("div", "remove");
      // remove.innerText = "x";
      const edit = createTag("div", "done");

      const editIcon = createTag("i");
      editIcon.setAttribute("class", "fa-regular fa-pen-to-square");
      // const edit = createTag("div", "edit");
      // edit.innerText = "edit";
      // const editAction;
      edit.addEventListener("click", (editClick) => {
        editForm(boardIndex, indi);
      });
      edit.appendChild(editIcon);
      actions.appendChild(remove);
      actions.appendChild(edit);
      card.appendChild(actions);
      cards.appendChild(card);
    });
    board.appendChild(cards);
    const adds = createTag("div", "btn");
    adds.innerText = "Add";
    adds.addEventListener("click", (eventAdds) => {
      addForm();
    });
    board.appendChild(adds);
    boards.appendChild(board);
  });
}

function removeBoard(boardIndex) {
  if (boardIndex == boardName.length - 1) {
    alert("Сүүлийн самбарыг устгаж устгаж болохгүй");
  } else if (boardName.length < 3) {
    alert("Багадаа 2 самбар байна");
  } else {
    boardName.splice(boardIndex, 1);
    refresh();
  }
}

function editBoardTitle(boardIndex) {
  console.log({ boardName });
  let editTit = prompt("Please enter your title", boardName[boardIndex].title);
  while (editTit == "" || editTit == "null" || editTit == " ") {
    editTit = prompt("Please enter your title");
  }
  console.log({ boardName });
  boardName[boardIndex].title = editTit;
  refresh();
}
function removeCard(boardIndex, indi) {
  boardName[boardIndex].arr.splice(indi, 1);
  refresh();
}
function addDragCard(index) {
  let dragItem = boardName[dragIndex1].arr[dragIndex2];
  boardName[dragIndex1].arr.splice(dragIndex2, 1);
  boardName[index].arr.push(dragItem);
  refresh();
}
refresh();
