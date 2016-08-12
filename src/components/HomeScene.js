import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-design';
import { COLORS } from '../constants';

export default class HomeScene extends Component {
  // JS can be injected into JSX using {}, typically to specify props
  render() {
    return (
      <View style={styles.view}>
        <Button text="Join" raised={true} onPress={() => this.props.join()}/>
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
});
