/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

import { pushSingleScreenApp } from './src/navigation';

export default class App extends Component {
  state = {
    token: null,
  };

  componentDidMount() {
    this.checkToken();
  }

  async checkToken() {
    const token = await AsyncStorage.getItem('token');
    this.setState({ token });
  }

  render() {
    pushSingleScreenApp();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Loading </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
