const list = document.querySelector(".list")
const input = document.querySelector(".input")
const addBtn = document.querySelector(".button")

let tasks = []

const screenWidth = screen.width

const addNewTask = () => {
  if (input.value === "") {
    if (screenWidth > 1336) {
      input.style.border = "3px solid #DC3545"
      input.style.boxShadow = "0 7px 8px #a7282830"
    } else {
      input.style.border = "2px solid #DC3545"
      input.style.boxShadow = "0 7px 8px #a7282830"
    }
    return
  }

  if (screenWidth > 1336) {
    input.style.border = "3px solid #28A745"
    input.style.boxShadow = "0 7px 8px #28A74530"
  } else {
    input.style.border = "2px solid #28A745"
    input.style.boxShadow = "0 7px 8px #28A74530"
  }

  const newTask = {
    id: tasks.length + 1,
    name: input.value
  }
  tasks.push(newTask)

  list.innerHTML = ""

  for (task of tasks) {
    let li = document.createElement("li")
    let span = document.createElement("span")

    li.append(span)
    span.append(`${task.id}. ${task.name}`)


    li.classList.add("list-item")

    list.appendChild(li)
  }

  input.value = ""
}

addBtn.onclick = () => {
  addNewTask()
}

// ma'lumotlar bazasi qo'shilishi kerak.