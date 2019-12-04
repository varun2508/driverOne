import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";

import { Cash, Track, Rating, Chat1, Chat2 } from "assets/icons";

const Sliders = () => (
  <Swiper
    controlsProps={{
      dotsTouchable: false,
      prevPos: false,
      nextPos: false,
      dotActiveStyle: {
        backgroundColor: "white"
      },
      dotProps: { badgeStyle: { backgroundColor: "#a4cdf1", marginLeft: 18 } }
    }}
  >
    <Slide>
      <Track height={120} />
      <DescriptionContainer>
        <FirstText>
          <BoldText>Be your own boss</BoldText>
          <BoldText>Drive when you want</BoldText>
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
          <BoldText>Build a reputation</BoldText>
        </FirstText>
        <SecondText>
          <Text>Earn an individual rating and get </Text>
          <Text>rewarded for safe driving.</Text>
        </SecondText>
      </DescriptionContainer>
    </Slide>
    <Slide>
      <Cash height={120} />
      <DescriptionContainer>
        <FirstText>
          <BoldText>Sign up here to see a world </BoldText>
          <BoldText>where drivers come first</BoldText>
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
  font-size: 20px;
`;

const BoldText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.2;
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
