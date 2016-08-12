import { connect } from 'react-redux';
import HomeScene from '../components/HomeScene';
import { join, generateName } from '../actionCreators';

export default connect(
  (state) => {
    return {
      name: state.name,
    };
  },
  (dispatch) => {
    return {
      join: function() {
        return dispatch(join());
      },
      generateName: function() {
        return dispatch(generateName());
      },
    };
  },
)(HomeScene);
