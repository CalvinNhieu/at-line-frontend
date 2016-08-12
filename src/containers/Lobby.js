import { connect } from 'react-redux';
import LobbyScene from '../components/LobbyScene';
import { countdown, pollLobby, addPlayer } from '../actionCreators';
import { Actions } from 'react-native-router-flux';

export default connect(
  (state) => {
    return {
      playerCount: state.playerCount,
      maxPlayers: state.maxPlayers,
      addPlayerInterval: 2,
      countdownTime: 5,
    };
  },
  (dispatch) => {
    return {
      pollLobby: function() {
        return dispatch(pollLobby());
      },
      addPlayers: function(time) {
        return dispatch(countdown(time, () => dispatch(addPlayer())));
      },
      countdown: function(time) {
        return dispatch(countdown(time, () => Actions.countdown()));
      },
    };
  },
)(LobbyScene);
