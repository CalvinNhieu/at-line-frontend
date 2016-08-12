import { connect } from 'react-redux';
import QuestionScene from '../components/QuestionScene';
import { countdown, pickChoice } from '../actionCreators';

export default connect(
  (state) => {
    return {
      question: state.question,
      answer: state.answer,
      choices: state.choices,
      choice: state.choice,
      countdownTime: 10,
    };
  },
  (dispatch) => {
    return {
      countdown: function(time) {
        return dispatch(countdown(time, () => null));
      },
      pickChoice: function(choice) {
        return dispatch(pickChoice(choice));
      },
    };
  },
)(QuestionScene);
