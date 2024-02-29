import React, { useReducer, useRef } from "react";
import "./App.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: state.length, text: action.payload, toggle: true }
      ];
    case "TOGGLE_CONTENT":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, toggle: !task.toggle }
          : task
      );
    default:
      return state;
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  const addTask = (inputValue) => {
    if (inputValue) {
      dispatch({ type: "ADD_TASK", payload: inputValue });
      inputRef.current.value = "";
    }
  };

  const toggleContent = (id) => {
    dispatch({ type: "TOGGLE_CONTENT", payload: id });
  };

  const scrollUp = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type here and press enter"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
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
