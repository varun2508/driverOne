import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';

const SimpleButton = ({ style, onPress, title, white, small }) => {
  if (white) {
    return (
      <Button
        buttonStyle={[styles.whiteButton, small && styles.smallButton]}
        containerStyle={[styles.containerStyle, style && style]}
        titleStyle={[styles.whiteButtonTitle, small && styles.titleSmallButton]}
        onPress={onPress}
        title={title}
      />
    );
  }

  return (
    <Button
      buttonStyle={[styles.button, small && styles.smallButton]}
      titleStyle={[styles.titleStyle, small && styles.titleSmallButton]}
      containerStyle={[styles.containerStyle, style && style]}
      onPress={onPress}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
  },

  titleStyle: {
    textTransform: 'uppercase',
  },

  button: {
    backgroundColor: '#2182d9',
  },

  smallButton: {
    paddingTop: 5,
    paddingBottom: 5,
  },

  whiteButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2182d9',
  },

  whiteButtonTitle: {
    color: '#2182d9',
    textTransform: 'uppercase',
  },

  titleSmallButton: {
    fontSize: 14,
  },
});

SimpleButton.defaultProps = {
  style: {},
  onPress: () => {},
  title: 'Ok',
  white: false,
  samll: false,
};

export default SimpleButton;
