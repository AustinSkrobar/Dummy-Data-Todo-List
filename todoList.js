// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {


        for (i = 0; arrayOfTodos.length; i++){

          let todoList = document.getElementById('todoList');  // find the <ol>
          
          let todoTitle = "";

          todoTitle = document.createTextNode(arrayOfTodos[i].title);

          todoItem = document.createElement ('LI');

          todoItem.appendChild(todoTitle);

          todoList.appendChild(todoItem);
        }
  }
  
  const clear =() => {

    document.getElementById("myForm").reset();
  }
  
  //Add an input to take in a number from 1 - 10
//Add a button that when clicked will:
//clear the previous todos
//and populate it with only todos with the userID that matches the number inputted.
//stores the currently filtered todos in a variable
//So that you can create two more buttons that when clicked:
//removes those todos
//and shows only todos that are either:
//completed
//not completed