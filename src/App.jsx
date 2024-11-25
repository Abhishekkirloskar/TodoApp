import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const[todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then( function(response){
      setTodos(response.data)

    })
  },[]);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>User ID: {todo.userId}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;







//https://jsonplaceholder.typicode.com/todos/1