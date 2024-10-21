// src/components/Read.js
import React from 'react';
import { useSelector } from 'react-redux';

function Read() {
  const items = useSelector(state => state.items);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
