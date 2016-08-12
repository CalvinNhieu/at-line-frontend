import { connect } from 'react-redux';
import HomeScene from '../components/HomeScene';
import { join } from '../actionCreators';

export default connect(
  () => {
    return {};
  },
  (dispatch) => {
    return {
      join: function() {
        return dispatch(join());
      },
    };
  },
)(HomeScene);
