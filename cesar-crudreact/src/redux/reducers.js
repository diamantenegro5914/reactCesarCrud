// src/redux/reducers.js
const initialState = {
    items: []
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, items: [...state.items, action.payload] };
      case 'UPDATE_ITEM':
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? action.payload : item
          )
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;
  