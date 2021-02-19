import React, { useState } from 'react';

export default function Todo({ todo }) {
  const [show, setShow] = useState(true);
  const handleDone = () => {
    console.log('done');
    setShow(false);
  };
  // const handleRemove = () => {
  //   console.log('remove');
  // };
  return (
    show && (
      <div className="columns is-gapless is-vcentered is-centered">
        <h2 className="column is-four-fifths ">{todo}</h2>
        <button className="column button is-info is-light" onClick={handleDone}>
          DONE
        </button>
        {/* <button onClick={handleRemove}>REMOVE</button> */}
      </div>
    )
  );
}
