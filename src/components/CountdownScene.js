import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../constants';

export default class CountdownScene extends Component {
  componentDidMount() {
    this.props.countdown(this.props.countdownTime);
    this.props.fetchQuestion();
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.label}>Starting in...</Text>
        <Text style={styles.countdown}>{this.props.countdownTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdown: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
