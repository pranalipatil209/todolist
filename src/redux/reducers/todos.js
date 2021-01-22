import { ADD_TODO, DEL_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

// add create datetime by default
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            date:new Date(),
            completed: false
          }
        }
      };
    }
    case DEL_TODO: {
      const { id } = action.payload;
      const updateByIds = {...state.byIds}
      delete updateByIds[id]
      const updateAllIds = state.allIds.filter(i => i !== id)
      return {
        ...state,
        allIds: updateAllIds,
        byIds: {
          ...updateByIds
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    
    default:
      return state;
  }
}
