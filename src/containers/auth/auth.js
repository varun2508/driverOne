import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { observer } from 'mobx-react';
import AuthStore from '@mobx/auth';

import { BlueLogo } from 'assets/icons';
import { Login, Registration } from './components';

@observer
class Auth extends Component {
  static options() {
    return {
      topBar: {
        elevation: 0,
        drawBehind: false,
        background: {
          translucent: true,
          blur: false,
          color: '#f8f8f8',
        },
        noBorder: true,
        visible: true,
        backButton: {
          visible: false,
        },
      },
    };
  }

  state = {
    isLogIn: false,
  };

  componentDidMount() {
    const { isLogIn } = this.props;
    this.setState({ isLogIn });
  }

  handlerAuth = (isLogIn) => {
    this.setState({ isLogIn });
  };

  render() {
    const { isLogIn } = this.state;
    const { componentId } = this.props;
    const { errorMessage } = AuthStore;
    const isError = errorMessage || false;

    return (
      <Container>
        <BlueLogo />
        <ButtonContainer>
          <Button
            title="Log In"
            type="clear"
            containerStyle={isLogIn && styles.isLogin}
            onPress={() => this.handlerAuth(true)}
          />
          <Button
            title="Sign Up"
            type="clear"
            containerStyle={!isLogIn && styles.isLogin}
            onPress={() => this.handlerAuth(false)}
          />
        </ButtonContainer>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Wrapper>
          {isLogIn ? (
            <Login componentId={componentId} />
          ) : (
            <Registration componentId={componentId} />
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default Auth;

const Container = styled.View`
  flex: 1;
  /* margin-top: 40px; */
  background-color: #f8f8f8;
  align-items: center;
  padding-left: 56px;
  padding-right: 38px;
`;

const ErrorMessage = styled.Text`
  color: red;
`;

const styles = StyleSheet.create({
  isLogin: {
    opacity: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#4a90e2',
  },
  button: {
    marginTop: 73,
  },
});

const Wrapper = styled.View`
  margin-top: 33px;
  width: 100%;
`;

const ButtonContainer = styled.View`
  display: flex;
  margin-top: 67px;
  flex-direction: row;
`;
