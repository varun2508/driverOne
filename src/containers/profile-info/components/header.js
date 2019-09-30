import React from 'react';
import styled from 'styled-components/native';

// import { Text } from 'react-native-elements';

const Header = () => {
  return (
    <Container>
      <H1 h3 style={{ fontSize: 28, color: '#fff' }}>
        Welcome to Driver One!
      </H1>
      <H3 h4>Before you get started, help us get to know</H3>
      <H3 h4>you so that we can give you the best results</H3>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  height: 218px;
  margin-right: -21px;
  margin-left: -21px;
  display: flex;
  align-items: center;
  background-color: #7ac0ff;
  padding-top: 64px;
`;

const H1 = styled.Text`
  font-size: 28px;
  color: #fff;
  margin-bottom: 12px;
`;
const H3 = styled.Text`
  font-size: 18px;
  color: #fff;
`;
