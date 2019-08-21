import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

import { navigate } from '@shared/helpers';

import { Sliders } from './components';

const WelcomeScreen = ({ componentId }) => {
  const navigateTo = (props) => {
    const isLogIn = props === 'Log In';

    navigate('AuthScreen', componentId, { isLogIn });
  };
  return (
    <Container>
      <Sliders />
      <ButtonContainer>
        <Button
          type="outline"
          title="Sign Up"
          buttonStyle={styles.buttonColor}
          onPress={navigateTo}
        />
        <Button
          title="Log In"
          buttonStyle={{ width: '100%' }}
          onPress={() => navigateTo('Log In')}
        />
      </ButtonContainer>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: '#fff',
    width: 176,
    marginRight: 15,
  },
});

const Container = styled.View`
  flex: 1;
  background: #5baaf2;
`;

const ButtonContainer = styled.View`
  height: 100px;
  display: flex;
  background-color: #3098f4;
  padding-left: 59px;
  padding-right: 59px;
  padding-top: 16px;
  flex-direction: row;
  justify-content: center;
`;
