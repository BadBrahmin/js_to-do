// Define input field and UL
const todoInput = document.querySelector("#input-todo");
const ul = document.querySelector("ul")

// Define Single Source of Truth sst
const allTodos = [];

//Function addTodo 
function addTodo(event) {
    if (event.keyCode == 13) {
        const todoText = todoInput.value;
        const singleTodo = {
            text: todoText,
            isDone: false
        };

        //Disable empty field entry by trimmimg todoinput.value
        if (todoInput.value.trim()) {
            allTodos.push(singleTodo); //Add singleTodo to SST (allTodos)
            todoInput.value = "";

            //BOOM! 
            console.log("qwe");
            createUI(allTodos);
        }
    }
}

//CreateUI Function: Takes data from allTodos to create list

function createUI(data = []) {
    innerText = "";     //clears the UI when a new task is added to avoid duplication
    data.forEach((todo, index) => {
        //create todo in a Para
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = todoText;
        //create checkbox
        const input = document.createElement("input");
        input.classList.add("list");
        input.type = "checkbox";
        input.addEventListener("click", isDoneFunc);
        input.checked = todo.isDone;
        input.setAttribute("data-id", index);
        //Span for Delete button
        const span = document.createElement("span");
        span.textContent: "X";
        span.setAttribute("data-id", index);
        span.addEventListener("click", deleteTodo);

        li.appendChild(input);
        li.appendChild(p);
        li.appendChild(span);
        ul.appendChild(li);

    })
}




































//Event Listener List

todoInput.addEventListener("keyup", addTodo);