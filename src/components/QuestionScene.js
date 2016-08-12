import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../constants';

export default class QuestionScene extends Component {
  componentDidMount() {
    this.props.countdown(this.props.countdownTime);
  }

  _renderChoices() {
    let counter = 0;

    return this.props.choices.map((choice) => {
      let comp = (
        <Text key={counter} style={styles.choice} onPressed={() => this.props.pickChoice(counter)}>{this.props.choices[counter]}</Text>
      );

      counter++;
      return comp;
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.question}>{this.props.question}</Text>
        <View style={styles.choices}>
          { this._renderChoices() }
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
  },
  question: {
    fontSize: 32,
  },
  choices: {
    marginTop: 30,
  },
  choice: {
    marginTop: 10,
  },
});
