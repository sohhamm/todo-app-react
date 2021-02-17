import React, { useState } from 'react';
import Todos from './components/Todos/Todos';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const handleChange = (e) => {
    setTask(() => e.target.value);
  };
  // console.log(tasks);

  return (
    <>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">TODO APP</p>
          <p className="subtitle">never miss your tasks again</p>
        </div>
      </section>
      <div className="box columns is-centered">
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control has-icons-left">
              <span className="icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              <input
                className="input is-rounded column"
                id="task"
                type="text"
                placeholder="Enter A Task"
                onChange={handleChange}
                value={task}
              />
            </div>
            <div className="control">
              <button className="button is-info is-rounded">ADD</button>
            </div>
          </div>
        </form>
      </div>
      {tasks.length !== 0 ? <Todos tasks={tasks} /> : null}
    </>
  );
}
