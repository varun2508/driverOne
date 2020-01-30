import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');
const h = height - 350;

const Card = ({ children, title, containerStyle }) => {
  return (
    <Container style={styles.card} ht={h}>
      <ScrollView
        contentContainerStyle={{ ...styles.scroll, ...containerStyle }}
      >
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
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    zIndex: 1
  },
  scroll: {
    paddingHorizontal: 31,
    paddingTop: 31,
    paddingBottom: 41
  }
});

const Title = styled.Text`
  font-size: 18px;
  letter-spacing: 1;
`;

const Container = styled.View`
  display: flex;
  background-color: #fff;
  z-index: 999;
  margin-top: -30px;
  max-height: ${({ ht }) => ht};
  box-shadow: 10px 5px 5px black;
`;

const Body = styled.View`
  margin-top: 31px;
`;
