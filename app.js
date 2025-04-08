main(); //calling main function

/////////// Main Function/////////
function main() {
  const InputAreaDiv = document.querySelector(".input-area");
  const sectionDiv = document.querySelector(".section");
  const inputElem = document.createElement("input");
  const InputBtnElem = document.createElement("button");
  InputTxtAreaFun(InputAreaDiv, inputElem);
  InputBtnFun(InputAreaDiv, InputBtnElem);
  AddTaskFun(sectionDiv, InputBtnElem, inputElem);
}

function InputTxtAreaFun(InputArea, inputElem) {
  InputArea.appendChild(inputElem);
  inputElem.setAttribute("type", "text");
  inputElem.setAttribute("placeholder", "Enter your task here...");
}

function DropDownMenuFun() {
  // drop down here
}

function InputBtnFun(InputArea, InputBtnElem) {
  InputArea.appendChild(InputBtnElem);
  InputBtnElem.textContent = "Add Task";
  InputBtnElem.classList.add("addTask-btn");
}

function AddTaskFun(section, InputBtnElem, inputElem) {
  const AddTaskDiv = document.createElement("div");
  section.appendChild(AddTaskDiv);
  AddTaskDiv.setAttribute("class", "add-task");

  ////////// Adding Paragraph///////
  function handleTxtContentFun() {
    const ParaElem = document.createElement("p");
    AddTaskDiv.appendChild(ParaElem);
    ParaElem.textContent = inputElem.value;
    inputElem.value = "";

    ///////// adding edit button ////////
    EditBtnFun(AddTaskDiv);
    ////////// adding delete button ///////
    DeleteBtnFun(AddTaskDiv);
  }
  InputBtnElem.addEventListener("click", handleTxtContentFun);
}

function EditBtnFun(AddTaskDiv) {
  const editBtn = document.createElement("button");
  AddTaskDiv.appendChild(editBtn);
  editBtn.textContent = "Edit";
  editBtn.setAttribute("class", "editBtn");
}

function DeleteBtnFun(AddTaskDiv) {
  const deleteBtn = document.createElement("button");
  AddTaskDiv.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("class", "deleteBtn");
}
