// import { useState } from 'react';
import './App.css';

let state = {
  userName: 'Poorshad',
  userId: 1,
};

function App() {
  return (
    <>
      <h1>Reimplement Redux</h1>
      <div className="card">
        <p>
          {state.userId} {state.userName}
        </p>
        <button
          onClick={() => {
            state.userName = 'something else';
          }}
        >
          change username
        </button>
      </div>
    </>
  );
}

export default App;
