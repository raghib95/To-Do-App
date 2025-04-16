main(); //calling main function

/////////// Main Function/////////
function main() {
  const InputAreaDiv = document.querySelector(".input-area");
  const sectionDiv = document.querySelector(".section");
  const inputElem = document.createElement("input");
  const InputBtnElem = document.createElement("button");
  InputTxtAreaFun(InputAreaDiv, inputElem);
  DropDownMenuFun(InputAreaDiv);
  InputBtnFun(InputAreaDiv, InputBtnElem);
  inputElem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      AddTaskFun(sectionDiv, inputElem);
    }
  });
  InputBtnElem.addEventListener("click", () =>
    AddTaskFun(sectionDiv, inputElem)
  );
}

///////// Input Text Area ///////////
function InputTxtAreaFun(InputAreaDiv, inputElem) {
  InputAreaDiv.appendChild(inputElem);
  inputElem.setAttribute("type", "text");
  inputElem.setAttribute("placeholder", "Enter your task here...");
}

/////////// Create dropdown /////////
function DropDownMenuFun(InputAreaDiv) {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("class", "drop-down");
  InputAreaDiv.appendChild(dropdown);
  const optionsArr = ["All Task", "Completed", "In progress"];
  for (let i = 0; i < optionsArr.length; i++) {
    const optionElem = document.createElement("option");
    optionElem.value = optionsArr[i];
    optionElem.textContent = optionsArr[i];
    dropdown.appendChild(optionElem);
  }
}

/////////// Input Button //////////
function InputBtnFun(InputAreaDiv, InputBtnElem) {
  InputAreaDiv.appendChild(InputBtnElem);
  InputBtnElem.textContent = "Add Task";
  InputBtnElem.classList.add("addTask-btn");
}

////////// Add Task on our List /////////
function AddTaskFun(sectionDiv, inputElem) {
  // Adding div
  const AddTaskDiv = document.createElement("div");
  sectionDiv.appendChild(AddTaskDiv);
  AddTaskDiv.setAttribute("class", "add-task");
  // Adding Paragraph
  const ParaElem = AddingParagraph(AddTaskDiv, inputElem);
  //edit button
  const editBtn = EditBtnFun(AddTaskDiv);
  editBtn.addEventListener("click", () => HandleEditBtn(editBtn, ParaElem));

  //delete button
  const deleteBtn = DeleteBtnFun(AddTaskDiv);
  deleteBtn.addEventListener("click", () => {
    AddTaskDiv.remove();
  });
}

function AddingParagraph(AddTaskDiv, inputElem) {
  const ParaElem = document.createElement("p");
  AddTaskDiv.appendChild(ParaElem);
  ParaElem.textContent = inputElem.value;
  inputElem.value = "";
  return ParaElem;
}

function EditBtnFun(AddTaskDiv) {
  const editBtn = document.createElement("button");
  AddTaskDiv.appendChild(editBtn);
  editBtn.textContent = "Edit";
  editBtn.setAttribute("class", "editBtn");
  return editBtn;
}

function HandleEditBtn(editBtn, ParaElem) {
  if (editBtn.textContent === "Edit") {
    editBtn.textContent = "Save";
    ParaElem.setAttribute("contenteditable", "true");
  } else {
    editBtn.textContent = "Edit";
    ParaElem.setAttribute("contenteditable", "false");
  }
}

function DeleteBtnFun(AddTaskDiv) {
  const deleteBtn = document.createElement("button");
  AddTaskDiv.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("class", "deleteBtn");
  return deleteBtn;
}
