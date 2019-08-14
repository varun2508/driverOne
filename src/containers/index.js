import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './welcome/welcome';

import App from '../../App';

class TopBar extends Component {
  state = {
    orientation: 'P',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>hi</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
};

export default function registerScreens() {
  Navigation.registerComponent('App', () => App);
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('TopBar', () => TopBar);
}
