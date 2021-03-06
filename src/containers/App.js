import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { COLORS } from '../constants';
import SplashScene from '../components/SplashScene';
import Home from '../containers/Home';
import Lobby from '../containers/Lobby';
import Countdown from '../containers/Countdown';
import Question from '../containers/Question';
import Leaderboard from '../containers/Leaderboard';
import Results from '../containers/Results';

// Actions.create() creates navigation actions (e.g. Actions.home())
// App's entry point is defined here with `initial` prop
const scenes = Actions.create(
  <Scene key='root'>
    <Scene
      key='splash'
      initial={true}
      component={SplashScene}
      hideNavBar={true}
    />
    <Scene
      key='home'
      title='At Line'
      component={Home}
    />
    <Scene
      key='lobby'
      title='Lobby'
      component={Lobby}
    />
    <Scene
      key='countdown'
      component={Countdown}
      hideNavBar={true}
    />
    <Scene
      key='question'
      title='Question'
      component={Question}
    />
    <Scene
      key='leaderboard'
      title='Leaderboard'
      component={Leaderboard}
    />
    <Scene
      key='results'
      title='Results'
      initial={true}
      component={Results}
    />
  </Scene>
);

class App extends Component {

  /**
  * - all `React.Component`s require a render() method
  * - the render method must return a single parent React.Component
  * - `React.Component`s can be written in JSX
  */
  render() {
    return (
      <Router
        scenes={scenes}
        navigationBarStyle={styles.navBar}
        renderLeftButton={() => null}
        renderRightButton={() => null}
        titleStyle={styles.title}
        hideNavBar={false}
      />
    );
  }
}

// define CSS styles to supply as the `style` prop to a React.Component
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: COLORS.THEME,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: 24,
  },
  backButton: {
    color: COLORS.WHITE,
  },
});

/** @param
* mapStateToProps: a function that maps the app state to props
* mapDispatchToProps: a function that maps store.dispatch() to actions as props
*
** @return
* a function that accepts a React.Component and returns the React.Component provisioned with the supplied props
*
* connect should create a container component from a presentational component
*/
export default connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {};
  },
)(App);
