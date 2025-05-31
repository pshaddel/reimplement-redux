// import { useState } from 'react';
import React from 'react';
import './App.css';
import { store } from './store';
function App() {
  const state = store.getState();
  return (
    <>
      <h1>Reimplement Redux</h1>
      <div className="card">
      <p>
            counter: {state.counter}
          </p>
          <button
            onClick={() => {
              store.dispatch({
                type: 'INCREMENT',
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              store.dispatch({
                type: 'DECREMENT',
              });
            }}
          >
            -
          </button>
      </div>
    </>
  );
}

export default App;
