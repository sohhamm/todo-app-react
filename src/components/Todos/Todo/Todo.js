import React, { useState, useEffect, useMemo } from 'react';

export default function Todo({ tasks }) {
  const [show, setShow] = useState(true);
  const newTasks = [...tasks];

  useEffect(() => {
    newTasks.map((ele, index) => (newTasks[index] = { name: ele, show: show }));
    return () => {};
  }, [tasks]);

  console.log(newTasks);

  const handleDone = () => {};
  const handleRemove = () => {
    setShow(false);
  };
  return (
    <div>
      {tasks
        .filter((todo) => todo.show !== false)
        .map((todo, index) => (
          <div key={todo}>
            <h2>{todo}</h2>
            <button onClick={handleDone}>DONE</button>
            <button onClick={handleRemove}>REMOVE</button>
          </div>
        ))}
    </div>
  );
}
