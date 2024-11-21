// src/components/Create.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

function Create() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addItem({ id: Date.now(), name: input }));
    setInput('');
  };




  return (

    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
}

export default Create;
