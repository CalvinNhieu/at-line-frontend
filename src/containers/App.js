import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { COLORS } from '../constants';
import SplashScene from '../components/SplashScene';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: COLORS.THEME,
  },
  title: {
    color: COLORS.WHITE,
  },
});

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

export default connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {};
  },
)(App);
