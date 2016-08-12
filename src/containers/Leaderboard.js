import { connect } from 'react-redux';
import LeaderboardScene from '../components/LeaderboardScene';
import { countdown, fetchQuestion } from '../actionCreators';
import { Actions } from 'react-native-router-flux';

export default connect(
  (state) => {
    return {
      countdownTime: 5,
      leaderboard: state.leaderboard,
      name: state.name,
    };
  },
  (dispatch) => {
    return {
      countdown: function(time) {
        return dispatch(countdown(time, () => Actions.results()));
      },
      fetchQuestion: function() {
        return dispatch(fetchQuestion());
      },
    };
  },
)(LeaderboardScene);
