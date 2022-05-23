import React, {useState} from "react";
import './App.css';

function App() {
  const [newTodo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo])
    setNewToDo("");
  };

  return (
    <div>
      <form onSubmit={(event) =>{
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewToDo(event.target.value);
        }} 
        type="text"
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i) => {
          return (
            <div key = {i}>
              <span>{todo}</span>
            </div>
        );
      })}
    </div>
  );
}

export default App;
