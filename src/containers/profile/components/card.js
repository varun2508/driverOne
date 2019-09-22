import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Card = ({ children, title }) => {
  return (
    <Container style={styles.card}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </ScrollView>
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
  scroll: {
    paddingHorizontal: 31,
    paddingTop: 31,
    paddingBottom: 41,
  },
});

const Title = styled.Text`
  font-size: 18px;
`;

const Container = styled.View`
  display: flex;
  background-color: #fff;
  z-index: 999;
  margin-top: -30px;
  max-height: 450;
  box-shadow: 10px 5px 5px black;
`;

const Body = styled.View`
  margin-top: 31px;
`;
