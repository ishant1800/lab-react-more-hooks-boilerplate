import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (inputValue) => {
    if (inputValue) {
      setTasks([...tasks, { id: tasks.length, text: inputValue, toggle: true }]);
    }
  };

  const toggleContent = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, toggle: !task.toggle } : task
      )
    );
  };

  const scrollUp = () => {
    document.getElementById("inputBox").focus();
  };

  return (
    <div>
      <input
        type="text"
        id="inputBox"
        placeholder="Type here and press enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }}
      />

      {tasks.map((task) => (
        <div key={task.id}>
          <div>
            <div>{task.toggle ? task.text : "This content is hidden"}</div>
            <button onClick={() => toggleContent(task.id)}>Toggle</button>
          </div>
        </div>
      ))}
      <div>
        <button id="gbw" onClick={scrollUp}>
          Get Back Writing
        </button>
      </div>
    </div>
  );
};

export default App;