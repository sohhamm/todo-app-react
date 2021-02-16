import React, { useState } from 'react';
import Todos from './components/Todos/Todos';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let todo = e.target.value;
    // console.log(todo);
    setTasks((prevTasks) => [...prevTasks, { task: todo }]);
  };
  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="task" />
          <input
            className="input"
            id="task"
            type="text"
            placeholder="Enter A Task"
          />
        </div>
      </form>
      {tasks.length !== 0 ? <Todos tasks={tasks} /> : null}
    </div>
  );
}
