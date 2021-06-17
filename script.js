var todos = [];

function inputTodo() {
  var todo = document.querySelector(".input input").value;
  // console.log(todo);
  return todo;
}

function addTodo() {
  var todo = inputTodo();
  if (todo) {
    todos.push({
      // alternate option "unshift(arg1, ...)"
      todo: todo,
      done: false,
    });
  } else alert("likh toh le bhai! itni bhi kya jaldi hai");
  renderTodo();
}

function renderTodo() {
  var output = document.querySelector(".output");
  output.innerHTML = "";

  if (todos.length) {
    todos.map(({ todo, done }) => {
      var todo_p = document.createElement("p");
      var todo_input = document.createElement("input");
      var todo_div = document.createElement("div");

      todo_p.textContent = todo;

      todo_input.type = "checkbox";
      todo_input.value = todo;
      todo_input.checked = done;
      todo_input.setAttribute("onclick", "handleClick(value)");
      if (done) {
        todo_div.className = "todo done";
      } else {
        todo_div.className = "todo";
      }

      todo_div.appendChild(todo_p);
      todo_div.appendChild(todo_input);

      output.appendChild(todo_div);
      // console.log(todo, " -> ", done);
    });
    document.querySelector(".input input").value = "";
  } else {
    var empty = document.createElement("h1");
    var message = document.createTextNode("Empty");
    empty.appendChild(message);
    empty.className = "empty";
    output.appendChild(empty);
  }
}

function handleClick(value) {
  for (var i in todos) {
    if (todos[i].todo === value) {
      todos[i].done = !todos[i].done;
    }
  }
  renderTodo();
}
