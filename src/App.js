import React, {useState} from "react";
import './App.css';

function App() {
  const [newTodo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={(event) =>{
        handleNewTodoSubmit(event);
      }}>
        <input type="text"/>
      </form>
    </div>
  );
}

export default App;
