import React from 'react';
import Todo from './Todo/Todo';

export default function Todos({ tasks }) {
  return (
    <div>
      <Todo tasks={tasks} />
    </div>
  );
}
