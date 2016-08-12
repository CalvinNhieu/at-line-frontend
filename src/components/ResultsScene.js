import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS, HEADER_HEIGHT } from '../constants';

export default class ResultsScene extends Component {
  componentDidMount() {
    this.props.countdown(this.props.countdownTime);
  }

  _result() {
    // fix this conditional
    if (this.props.name === this.props.leaderboard[0].name) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }

  render() {
    return (
      <View style={styles.view}>
        <Text stlye={styles.result}>{ this._result() }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
