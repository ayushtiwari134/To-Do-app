import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [mode, setMode] = useState("light")
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "wake up",
    },
    {
      id: 2,
      task: "brush teeth",
    },
  ]);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
  ]);

  const handleAddCheckbox = () => {
    const newCheckboxId = checkboxes.length + 1;
    const newCheckbox = {
      id: newCheckboxId,
      checked: false,
    };

    setCheckboxes((prevCheckboxes) => [...prevCheckboxes, newCheckbox]);
  };

  const handleOnClick = (text) => {
    let newText = [...tasks];
    let count = tasks.length + 1;
    newText.push({ id: count, task: text });
    setTasks(newText);
    handleAddCheckbox();
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <div className="container box" style={{ border: mode === "light" ? "4px solid black" : "4px solid white" }}>
      <button onClick={toggleMode} className={`btn btn-${mode === "light" ? "dark" : "light"} mt-4`}>Enable {mode === "light" ? "dark" : "light"} Mode</button>
      <Header mode={mode} />
      <Tasks
        tasks={tasks}
        handleOnClick={handleOnClick}
        checkboxes={checkboxes}
        setCheckboxes={setCheckboxes}
        mode={mode}
      />
    </div>
  );
}

export default App;
