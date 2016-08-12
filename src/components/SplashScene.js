// example presentational component

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../constants';

// all `React.Component`s require a render() method
export default class SplashScreen extends Component {
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
