import React from 'react';
import Todo from './Todo/Todo';

export default function Todos({ tasks }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo key={todo} todo={todo} />
      ))}
    </div>
  );
}
