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
  constructor(props) {
    super(props);

    this.props.generateName();
  }

  // JS can be injected into JSX using {}, typically to specify props
  render() {
    return (
      <View style={styles.view}>
        <View >
          <Text>{this.props.name}</Text>
          <Button text="Generate" onPress={() => this.props.generateName()}/>
        </View>
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
  nameGenerator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
