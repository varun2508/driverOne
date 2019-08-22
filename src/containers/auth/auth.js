import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

import { BlueLogo } from 'assets/icons';

import { Login, Registration } from './components';

class Auth extends Component {
  static options() {
    return {
      topBar: {
        background: {
          translucent: true,
          blur: false,
        },
        noBorder: true,
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

    return (
      <Container>
        <BlueLogo />
        <ButtonContainer>
          <NavButton
            title="Log In"
            type="clear"
            isLogIn={isLogIn}
            onPress={() => this.handlerAuth(true)}
          />
          <SignUpButton
            title="Sign Up"
            type="clear"
            isLogIn={!isLogIn}
            onPress={() => this.handlerAuth(false)}
          />
        </ButtonContainer>
        <Wrapper>{isLogIn ? <Login /> : <Registration />}</Wrapper>
      </Container>
    );
  }
}

export default Auth;

const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
  align-items: center;
  padding-left: 56px;
  padding-right: 38px;
`;

const Wrapper = styled.View`
  margin-top: 33px;
  width: 100%;
`;

const NavButton = styled(Button)`
  color: #4a90e2;
  ${({ isLogIn }) => {
    return (
      isLogIn &&
      `
    opacity: 1;
    border-bottom-width: 1px;
    border-bottom-color: #4a90e2;`
    );
  }}
`;

const SignUpButton = styled(NavButton)`
  margin-left: 71px;
`;

const ButtonContainer = styled.View`
  display: flex;
  margin-top: 67px;
  flex-direction: row;
`;
