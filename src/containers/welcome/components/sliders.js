import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';

import { Cash, Track, Rating, Chat1, Chat2 } from 'assets/icons';

const Sliders = () => (
  <Swiper>
    <Slide>
      <Track height={120} />
      <DescriptionContainer>
        <FirstText>
          <Text>Be your own boss</Text>
          <Text>Drive when you want</Text>
        </FirstText>
        <SecondText>
          <Text>Work as much or little as you want</Text>
          <Text>Using our platform to book jobs.</Text>
        </SecondText>
      </DescriptionContainer>
    </Slide>
    <Slide>
      <Rating height={120} />
      <DescriptionContainer>
        <FirstText>
          <Text>Build a reputation</Text>
        </FirstText>
        <SecondText>
          <Text>Earn an individual rating and get </Text>
          <Text>rewarded for safe drivin</Text>
        </SecondText>
      </DescriptionContainer>
    </Slide>
    <Slide>
      <Cash height={120} />
      <DescriptionContainer>
        <FirstText>
          <Text>Sign up here to see a world </Text>
          <Text>where drivers come first</Text>
        </FirstText>
        <SecondText>
          <Text>Quick signup process. Make $$ </Text>
          <Text>when your friends drive. Next day pay.</Text>
        </SecondText>
      </DescriptionContainer>
    </Slide>
    <Slide>
      <Chat1 />
      <Chat2 />
      <FirstText>
        <Text>Join our growing community of </Text>
        <Text>drivers</Text>
      </FirstText>
    </Slide>
  </Swiper>
);

export default Sliders;

const Slide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const DescriptionContainer = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const FirstText = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SecondText = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
