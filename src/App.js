import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [edit, setEdit] = useState(null);
  const addTodo = () => {
    if (!input) {
      alert("Please Enter Your Task");
    } else if (input && !toggleBtn) {
      setTodos(
        todos.map((e) => {
          if (e.id === edit) {
            return { ...e, task: input };
          }
          return e;
        })
      );
      setToggleBtn(true);
      setInput("");
      setEdit(null);
    } else {
      const newTodos = {
        id: Math.floor(Math.random() * 1000),
        task: input,
      };
      setTodos([...todos, newTodos]);
      setInput("");
      // console.log(todos);
    }
  };

  const handleDelete = (id) => {
    const del = todos.filter((todo) => todo.id !== id);
    setTodos(del);
  };

  const handleEdit = (id) => {
    const edit = todos.find((todo) => {
      return todo.id === id;
    });
    console.log(edit);
    setToggleBtn(false);
    setInput(edit.task);
    setEdit(id);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Your Task..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {toggleBtn ? (
        <button onClick={addTodo}>Add Task</button>
      ) : (
        <button onClick={addTodo}>Edit</button>
      )}

      <div>
        {todos.map((todo) => {
          return (
            <ul key={todo.id}>
              <li>{todo.task}</li>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
