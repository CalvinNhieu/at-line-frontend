import { COLOR_NAMES, ANIMAL_NAMES } from './constants';
import { Actions } from 'react-native-router-flux';
import {
  GENERATE_NAME,
  CREATE_PLAYER_SUCCESS,
  CREATE_PLAYER_FAIL,
  POLL_LOBBY_SUCCESS,
  POLL_LOBBY_FAIL,
  SET_COUNTDOWN,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAIL,
  SET_CHOICE,
  PICK_CHOICE_SUCCESS,
  PICK_CHOICE_FAIL,
  SET_ANSWER,
  GET_RESULTS_FAIL,
} from './actionTypes';

const initialState = {
  id: -1,
  gameId: 1,
  name: '',
  playerCount: 1,
  maxPlayers: 6,
  countdownTime: 3,
  question: 'Where is the capybara indigenous to?',
  answer: -1,
  choices: ['California', 'Canada', 'Kazhakstan', 'Atlantic Ocean'],
  choice: -1,
  timeUp: false,
  leaderboard: [
    {
      name: 'Golden Capybara',
      score: '5',
    },
    {
      name: 'Crimson Wolf',
      score: '4',
    },
  ],
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
  [CREATE_PLAYER_SUCCESS]: (state, action) => {
    return {
      ...state,
      id: action.id,
    };
  },
  [CREATE_PLAYER_FAIL]: (state) => {
    return state;
  },
  [POLL_LOBBY_SUCCESS]: (state, action) => {
    return {
      ...state,
      playerCount: action.playerCount,
    };
  },
  [POLL_LOBBY_FAIL]: (state) => {
    return state;
  },
  [SET_COUNTDOWN]: (state, action) => {
    return {
      ...state,
      countdownTime: action.time,
    };
  },
  [SET_CHOICE]: (state, action) => {
    return {
      ...state,
      choice: action.choice,
    };
  },
  [FETCH_QUESTION_SUCCESS]: (state, action) => {
    return {
      ...state,
      question: action.question,
      choices: action.choices,
      choice: action.choice,
    };
  },
  [FETCH_QUESTION_FAIL]: (state) => {
    return state;
  },
  [PICK_CHOICE_SUCCESS]: (state) => {
    return state;
  },
  [PICK_CHOICE_FAIL]: (state) => {
    return state;
  },
  [SET_ANSWER]: (state, action) => {
    return {
      ...state,
      answer: action.answer,
    };
  },
  [GET_RESULTS_FAIL]: (state) => {
    return state;
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
