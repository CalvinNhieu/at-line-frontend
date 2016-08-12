const initialState = {};
const reducerMap = {};

/** the reducer is...
* - invoked on store.dispatch(action)
* - called on createStore to set the initialState
* - the only point in the app where the state can be modified
*/
export default function rootReducer(state = initialState, action) {
  if (reducerMap[action.type]) {
      return reducerMap[action.type](state, action);
  } else {
    return state;
  }
};
