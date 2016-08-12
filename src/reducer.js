const initialState = {};
const reducerMap = {};

export default function rootReducer(state = initialState, action) {
  if (reducerMap[action.type]) {
      return reducerMap[action.type](state, action);
  } else {
    return state;
  }
};
