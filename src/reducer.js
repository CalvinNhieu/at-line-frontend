import { COLOR_NAMES, ANIMAL_NAMES } from './constants';
import { Actions } from 'react-native-router-flux';
import {
  GENERATE_NAME,
} from './actionTypes';

const initialState = {
  id: -1,
  gameId: 1,
  name: '',
  playerCount: 1,
  maxPlayers: 6,
  question: '',
  answer: -1,
  choices: [],
  timeUp: false,
  leaderboard: [],
  prize: '',
};

const reducerMap = {
  [GENERATE_NAME]: (state) => {
    let color = COLOR_NAMES[Math.floor(Math.random()*COLOR_NAMES.length)];
    let animal = ANIMAL_NAMES[Math.floor(Math.random()*ANIMAL_NAMES.length)];

    return {
      ...state,
      name: color + ' ' + animal,
    };
  },
};

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
