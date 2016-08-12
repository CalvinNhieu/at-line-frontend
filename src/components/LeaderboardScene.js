import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS, HEADER_HEIGHT } from '../constants';

export default class LeaderboardScene extends Component {
  componentDidMount() {
    this.props.countdown(this.props.countdownTime);
    this.props.fetchQuestion();
  }

  _renderBoard() {
    let counter = 0;

    return this.props.leaderboard.map((choice) => {
      let name;
      if (counter === 0) {
        name = this.props.name;
      } else {
        name = this.props.leaderboard[counter].name;
      }
      let comp = (
        <Text key={counter} style={styles.entry}>{name + ': ' + this.props.leaderboard[counter].score}</Text>
      );

      counter++;
      return comp;
    });
  }

  render() {
    return (
      <View style={styles.view}>
        { this._renderBoard() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    paddingTop: HEADER_HEIGHT+20,
  },
  entry: {
    fontSize: 18,
  },
});
