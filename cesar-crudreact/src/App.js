// src/App.js
import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <h1>CRUD App with React and Redux</h1>
      <Create />
      <Read />
      <Update />
      <Delete />
    </div>
  );
}

export default App;
