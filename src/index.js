import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

import './index.css';

// library.add(fab);

export default function Index() {
  return (
    <>
      <App />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
