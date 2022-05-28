import React from 'react';
import { db } from './services/client';
import './App.css';

function App() {
  console.log('db', db);
  return (
    <div className="App">
      GitHub Usernames
    </div>
  );
}

export default App;
