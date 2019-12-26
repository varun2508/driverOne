import React, { useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import Icons from '@mobx/icons';
import {
  PreviewScreens,
  goHome,
  profileDetails,
  JobsScreen
} from './src/navigation';

const App = () => {
  const checkToken = async () => {
    const localToken = await AsyncStorage.getItem('token');
    if (localToken) {
      // goHome();
      profileDetails();
      // JobsScreen();
    } else {
      // goHome();
      PreviewScreens();
    }
  };

  const fetchIcons = async () => {
    await Icons.fetchIcons();
  };
  useEffect(() => {
    fetchIcons();
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Loading... </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
