import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Card = ({ children, title }) => {
  return (
    <Container style={styles.card}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Container>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

const Title = styled.Text`
  font-size: 18px;
`;

const Container = styled.View`
  display: flex;
  padding-top: 31px;
  padding-bottom: 41px;
  padding-left: 31px;
  padding-right: 31px;
  background-color: #fff;
  z-index: 999;
  margin-top: -30px;
  box-shadow: 10px 5px 5px black;
`;

const Body = styled.View`
  margin-top: 31px;
`;
