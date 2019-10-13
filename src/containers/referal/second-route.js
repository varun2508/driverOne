import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { MoneyCoins, DollarBills } from 'assets/icons';
import { BackButton } from '@shared';

const ScreenOne = ({ componentId }) => {
  return (
    <Container>
      <ButtonContainer>
        <Text>18$</Text>
      </ButtonContainer>
    </Container>
  );
};

export default ScreenOne;

const Container = styled.View`
  padding: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 90px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 90px;
  border-radius: 100;
  border-width: 2;
  border-color: #7ac0ff;
`;
const CodeWrapper = styled.View`
  height: 40px;
  border-radius: 4px;
`;
const CodeContainer = styled.View`
  margin-top: 40px;
`;

const Code = styled.Text``;

const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 30px;
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px
  align-items: center;
`;

const Text = styled.Text`
    font-size: 12px;
    color: #7ac0ff;
`;

const InfoText = styled.View`
    margin-top: 20px;
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const SubText = styled.Text`
    font-size: 14px;
    width: 250px;
    color: #000;
`;
const TextContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Pluse = styled.Text`
    font-size: 32px;
    font-weight: bold;
`;
