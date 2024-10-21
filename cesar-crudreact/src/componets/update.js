// src/components/Update.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../redux/actions';

function Update() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setUpdatedName(item.name);
  };

  const handleUpdate = () => {
    dispatch(updateItem({ ...selectedItem, name: updatedName }));
    setSelectedItem(null);
    setUpdatedName('');
  };

  return (
    <div>
      <h2>Update Item</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleSelectItem(item)}>
            {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <input
            type="text"
            value={updatedName}
            onChange={e => setUpdatedName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Update;
