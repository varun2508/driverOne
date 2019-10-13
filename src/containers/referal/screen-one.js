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
      <BackButton componentId={componentId} />
      <ImageContainer>
        <MoneyCoins />
        <Pluse>+</Pluse>
        <DollarBills />
      </ImageContainer>
      <Wrapper>
        <TextContainer>
          <Text>50c / hour</Text>
          <Text>each time your friend</Text>
          <Text>drives</Text>
        </TextContainer>
        <TextContainer>
          <Text>$10</Text>
          <Text>One time bonus for</Text>
          <Text>new referrals</Text>
        </TextContainer>
      </Wrapper>
      <InfoText>
        <SubText numberOfLines={3} ellipsizeMode="tail">
          Give a friend $10 and get $10 overtime you refer a friend. PLUS earn 50c per hour that
          your friend drives.
        </SubText>
      </InfoText>

      <CodeContainer>
        <Text>Your Code</Text>
        <CodeWrapper style={styles.button}>
          <Code>GR832</Code>
        </CodeWrapper>

        <ButtonContainer>
          <Button containerStyle={{ flex: 1 }} onPress={() => {}} title="Copy code" />

          <Button
            buttonStyle={{ height: '100%' }}
            containerStyle={{ marginLeft: 8, width: 50, borderRadius: 4 }}
            icon={<MaterialIcons name="share" size={16} color="#64abef" />}
            type="outline"
          />
        </ButtonContainer>
      </CodeContainer>
    </Container>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#999',
    borderWidth: 0.5,
    borderColor: '#999',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const Container = styled.View`
    padding: 21px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 40px;
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
    color: #999;
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
