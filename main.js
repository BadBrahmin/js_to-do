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




































//Event Listener List

todoInput.addEventListener("keyup", addTodo);