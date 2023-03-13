import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  printTodo(id, title, completed);
});

function printTodo(id: number, title: string, completed: boolean) {
  console.log(`
    ID: ${id}
    Title: ${title}
    Finished: ${completed}
  `);
}
