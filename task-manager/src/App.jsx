import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div className="input-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="btn-add" onClick={addTask}>
          Add Task
        </button>
      </div>
      <p>You have {tasks.length} tasks</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => toggleComplete(task.id)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
