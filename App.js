import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { pushSingleScreenApp, goHome } from './src/navigation';

const App = () => {
  const [token, setToken] = useState();

  const checkToken = async () => {
    const loalToken = await AsyncStorage.getItem('token');
    setToken(loalToken);
  };
  useEffect(() => {
    checkToken();
  }, []);

  if (token) {
    goHome();
  } else {
    goHome();
    // pushSingleScreenApp();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Loading </Text>
    </View>
  );
};

export default App;

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
