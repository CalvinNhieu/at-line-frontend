import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-design';
import { COLORS, HEADER_HEIGHT } from '../constants';

export default class LobbyScene extends Component {
  componentDidMount() {
    this.props.countdown(this.props.countdownTime);
    this.props.addPlayers(this.props.addPlayerInterval);
    // this.props.pollLobby();
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>Waiting for players...</Text>
        <Text style={styles.playerCount}>{this.props.playerCount + '/' + this.props.maxPlayers}</Text>
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
  playerCount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
