import { connect } from 'react-redux';
import ResultsScene from '../components/ResultsScene';
import { countdown } from '../actionCreators';
import { Actions } from 'react-native-router-flux';

export default connect(
  (state) => {
    return {
      countdownTime: 7,
      name: state.name,
      leaderboard: state.leaderboard,
    };
  },
  (dispatch) => {
    return {
      countdown: function(time) {
        return dispatch(countdown(time, () => Actions.home()));
      },
    };
  },
)(ResultsScene);
