import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { ChangeBackgroundButton } from './components/change-background-button/change-background-button.tsx';
import { MessageParent } from './components/props-section/MessageParent.tsx';
import { Timer } from './components/timer/timer.tsx';
import { useTheme } from './contexts/ThemeContext.tsx';
import { ThemeSwitcher } from './components/theme-switcher/ThemeSwitcher.tsx';
import Counter from './components/counter/counter.tsx';
import { UseMemoHook } from './components/use-memo-hook/use-memo-hook.tsx';
import { DayNight } from './components/day-night/DayNight.tsx';
import { useNavigate } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  
  const removeTask = (index: number) => setTasks(tasks.filter((_, i) => i !== index));
  const onGoToContactsClick = () => navigate('/contact');

  useEffect(() => {
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  useEffect(() => inputRef?.current?.focus(), []);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>To-Do List</h1>
        <input
          type="text"
          ref={inputRef}
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
      <section>
        <h2>Change Background Color</h2>
        <ChangeBackgroundButton />
      </section>
      <section>
        <h2>Props from parent to child</h2>
        <MessageParent />
      </section>
      <section>
        <h2>Timer example:</h2>
        <Timer />
      </section>
      <section>
        <h2>Theme Switcher Example</h2>
        <ThemeSwitcher />
      </section>
      <section>
        <h2>Прыклад лічыльніка</h2>
        <Counter />
      </section>
      <section>
        <h2>Прыклад Use memo hook</h2>
        <UseMemoHook />
      </section>
      <section>
        <h2>Day Night Example: <DayNight dayMessage="Сёння дзень" nightMessage="Зараз ноч" /></h2>
      </section>
      <section>
        <h2>Прыклад як змяніць url праграмна <button onClick={onGoToContactsClick}>Go to Contacts</button></h2>
      </section>
    </div>
  );
}

export default App;
