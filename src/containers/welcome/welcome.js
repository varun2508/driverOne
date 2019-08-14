import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-web-swiper';

import { Header } from '@shared';

console.log(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});

const WelcomeScreen = () => <Container />;

export default WelcomeScreen;

const Container = styled.View`
  flex: 1;
  background: #7ac0ff;
`;
