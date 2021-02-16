import React from 'react';
import Todo from './Todo/Todo';

export default function Todos({ tasks }) {
  console.log(tasks);
  return (
    <div>
      <Todo>this is a todo</Todo>
    </div>
  );
}
