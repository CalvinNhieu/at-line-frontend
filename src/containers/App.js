import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { COLORS } from '../constants';
import SplashScene from '../components/SplashScene';

// define CSS styles to supply as the `style` prop to a React.Component
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: COLORS.THEME,
  },
  title: {
    color: COLORS.WHITE,
  },
});

// Actions.create() creates navigation actions (e.g. Actions.splash())
const scenes = Actions.create(
  <Scene key='root'>
    <Scene
      key='splash'
      initial={true}
      component={SplashScene}
      hideNavBar={true}
    />
  </Scene>
);

class App extends Component {
  render() {
    return (
      <Router
        scenes={scenes}
        navigationBarStyle={styles.navBar}
        renderBackButton={() => null}
        renderRightButton={() => null}
        titleStyle={styles.title}
        hideNavBar={false}
      />
    );
  }
}

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
