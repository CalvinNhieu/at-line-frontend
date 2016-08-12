import { COLOR_NAMES, ANIMAL_NAMES } from './constants';
import { Actions } from 'react-native-router-flux';
import {
  GENERATE_NAME,
  JOIN_SUCCESS,
  SET_PLAYER_COUNT,
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
  ADD_PLAYER,
} from './actionTypes';

const initialState = {
  id: -1,
  sessionId: 1,
  gameId: 1,
  name: '',
  playerCount: 1,
  maxPlayers: 6,
  countdownTime: 3,
  question: 'Where should you do your summer internship?',
  answer: -1,
  choices: ['Eventbrite', 'Slack', '', ''],
  choice: -1,
  timeUp: false,
  leaderboard: [
    {
      name: 'Hot Pink Shark',
      score: '1',
    },
    {
      name: 'Invisible Platypus',
      score: '0',
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
  [JOIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      sessionId: action.sessionId,
      playerCount: action.playerCount,
    };
  },
  [CREATE_PLAYER_SUCCESS]: (state, action) => {
    console.log("Create player success");
    return {
      ...state,
      id: action.id,
    };
  },
  [CREATE_PLAYER_FAIL]: (state) => {
    return state;
  },
  [SET_PLAYER_COUNT]: (state, action) => {
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
      answer: action.answer,
      choices: action.choices,
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
  [ADD_PLAYER]: (state) => {
    if (state.playerCount < 6) {
      let nextPlayerCount = state.playerCount+1;
      return {
        ...state,
        playerCount: nextPlayerCount,
      };
    }
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
