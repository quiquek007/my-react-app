import React, { useState } from 'react';
import './App.scss';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, idx) => (
            <li key={idx}>
              {task}
              <button onClick={() => removeTask(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
