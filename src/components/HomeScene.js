import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-design';
import { COLORS, HEADER_HEIGHT } from '../constants';

export default class HomeScene extends Component {
  // JS can be injected into JSX using {}, typically to specify props
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Button text="Generate" raised={true} onPress={() => this.props.generateName()}/>
        <View style={styles.joinBtn}>
          <Button text="Join" raised={true} onPress={() => this.props.join()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: HEADER_HEIGHT+10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  joinBtn: {
    marginTop: 100,
  },
});
