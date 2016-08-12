import { connect } from 'react-redux';
import QuestionScene from '../components/QuestionScene';
import { countdown, pickChoice, getResults } from '../actionCreators';
import { Actions } from 'react-native-router-flux';

export default connect(
  (state) => {
    return {
      question: state.question,
      answer: state.answer,
      choices: state.choices,
      choice: state.choice,
      countdownTime: 7,
    };
  },
  (dispatch) => {
    return {
      countdown: function(time) {
        // return dispatch(countdown(time, () => dispatch(getResults())));
        return dispatch(countdown(time, () => Actions.leaderboard()));
      },
      pickChoice: function(choice) {
        return dispatch(pickChoice(choice));
      },
    };
  },
)(QuestionScene);
