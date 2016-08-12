// example presentational component

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { COLORS } from '../constants';

export default class SplashScene extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     Actions.home();
  //   }, 1000);
  // }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.label}>Eventbrite</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.THEME,
  },
  label: {
    color: COLORS.WHITE,
    fontSize: 24,
  },
});
