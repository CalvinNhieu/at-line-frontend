import { connect } from 'react-redux';
import CountdownScene from '../components/CountdownScene';
import { countdown } from '../actionCreators';
import { Actions } from 'react-native-router-flux';

export default connect(
  (state) => {
    return {
      countdownTime: state.countdownTime,
    };
  },
  (dispatch) => {
    return {
      countdown: function(time) {
        return dispatch(countdown(time, () => Actions.question()));
      }
    };
  },
)(CountdownScene);
