import React from 'react';

export default function todo({ tasks }) {
  const handleDone = () => {};
  const handleRemove = () => {};
  return (
    <div>
      {tasks.map((todo, index) => (
        <div>
          <h2 key={todo}>{todo}</h2>
          <button onClick={handleDone}>DONE</button>
          <button onClick={handleRemove}>REMOVE</button>
        </div>
      ))}
    </div>
  );
}
