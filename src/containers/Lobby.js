import { connect } from 'react-redux';
import LobbyScene from '../components/LobbyScene';
import { pollLobby } from '../actionCreators';

export default connect(
  (state) => {
    return {
      playerCount: state.playerCount,
      maxPlayers: state.maxPlayers,
    };
  },
  (dispatch) => {
    return {
      pollLobby: function() {
        return dispatch(pollLobby());
      },
    };
  },
)(LobbyScene);
