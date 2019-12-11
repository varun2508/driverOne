import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';

const SimpleButton = ({ style, onPress, title }) => {
  return (
    <Button
      buttonStyle={styles.button}
      containerStyle={styles.containerStyle}
      onPress={onPress}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  button: {
    backgroundColor: '#2182d9',
  },
});

SimpleButton.defaultProps = {
  style: {},
  onPress: () => {},
  title: 'Ok',
};

export default SimpleButton;
