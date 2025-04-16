main(); //calling main function

/////////// Main Function/////////
function main() {
  const InputAreaDiv = document.querySelector(".input-area");
  const sectionDiv = document.querySelector(".section");
  const inputElem = document.createElement("input");
  const InputBtnElem = document.createElement("button");
  ///// input area ////
  InputTxtAreaFun(InputAreaDiv, inputElem);
  ///// dropdown/////
  const optionsArr = ["All Task", "Completed", "In progress"];
  const dropdown = DropDownMenuFun(InputAreaDiv, optionsArr);
  dropdown.addEventListener("change", () => {
    HandleDropDown(sectionDiv, dropdown, optionsArr);
  });
  ///// add text ////
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
function DropDownMenuFun(InputAreaDiv, optionsArr) {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("class", "drop-down");
  InputAreaDiv.appendChild(dropdown);

  for (let i = 0; i < optionsArr.length; i++) {
    const optionElem = document.createElement("option");
    optionElem.value = optionsArr[i];
    optionElem.textContent = optionsArr[i];
    dropdown.appendChild(optionElem);
  }
  return dropdown;
}

////////// Handle dropdown //////////
function HandleDropDown(sectionDiv, dropdown, optionsArr) {
  const children = Array.from(sectionDiv.children);
  console.log(children);
  children.forEach((child) => {
    const isCompleted = child.classList.contains("checked");
    if (dropdown.value === optionsArr[1]) {
      isCompleted
        ? child.classList.remove("hide")
        : child.classList.add("hide");
    } else if (dropdown.value === optionsArr[2]) {
      isCompleted
        ? child.classList.add("hide")
        : child.classList.remove("hide");
    } else {
      child.classList.remove("hide");
    }
  });
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

  //Adding check Box
  const checkBox = CheckBoxFun(AddTaskDiv);
  checkBox.addEventListener("change", () => {
    const parentDiv = checkBox.parentNode;
    if (checkBox.checked) {
      ParaElem.classList.add("lineTrough");
      parentDiv.classList.add("checked");
    } else {
      ParaElem.classList.remove("lineTrough");
      if (parentDiv.classList.contains("checked")) {
        parentDiv.classList.remove("checked");
      }
    }
  });
}
////////////////////////////////////

function CheckBoxFun(AddTaskDiv) {
  const checkBoxElem = document.createElement("input");
  AddTaskDiv.appendChild(checkBoxElem);
  checkBoxElem.setAttribute("type", "checkbox");
  checkBoxElem.setAttribute("class", "check-box");
  return checkBoxElem;
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
