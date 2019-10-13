import React, { Component } from 'react';
import styled from 'styled-components/native';

class Referal extends Component {
  static options() {
    return {
      topBar: {
        elevation: 0,
        drawBehind: false,
        text: 'Button one',
        background: {
          translucent: true,
          blur: false,
          color: '#fff',
        },
        noBorder: true,
        visible: true,
        backButton: {
          visible: false,
        },
      },
    };
  }

  state = {};

  render() {
    return (
      <Container>
        <Text>Referal</Text>
      </Container>
    );
  }
}

export default Referal;

const Container = styled.View`
  display: flex;
  flex: 1;
  background: red;
`;

const Text = styled.Text``;
