import React from 'react';
import styled from 'styled-components/native';

import { BackButton } from '@shared';

const ScreenOne = ({ componentId }) => {
  return (
    <Container>
      <BackButton componentId={componentId} />
      <Wrapper>
        <SubText>Total earned from my network</SubText>
        <ButtonContainer>
          <Text>18$</Text>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default ScreenOne;

const Container = styled.View`
  padding: 21px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 90px;
  align-self: center;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  width: 90px;
  border-radius: 100;
  border-width: 2;
  border-color: #7ac0ff;
`;

const Wrapper = styled.View`
  padding: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #7ac0ff;
`;

const SubText = styled.Text`
  font-size: 14px;
  align-items: center;
  color: #000;
`;
