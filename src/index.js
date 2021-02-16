import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

export default function Index() {
  return (
    <>
      <App />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
