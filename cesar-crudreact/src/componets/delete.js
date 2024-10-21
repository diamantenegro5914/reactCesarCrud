// src/components/Delete.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/actions';

function Delete() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <h2>Delete Item</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Delete;
