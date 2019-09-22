import React, { useState } from 'react';
import { Linking, View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import styled from 'styled-components/native';

import Card from './card';

const Policy = () => {
  const [digits, setDigit] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' });
  const handleDigits = (key, digit) => {
    if (digit.length < 2) {
      const newDigit = digits[digit];
      setDigit({ ...digits, [key]: newDigit });
    }
    return null;
  };
  return (
    <Card title="Join the Driver One Team!">
      <Text>
        In order to apply and view job details, we require drivers to go through a quick employment
        application process on our website.
      </Text>
      <Text>
        An email has been sent to your address on file with steps on how to begin your application.
        If you have already filled out an application, you will receive a notification to your phone
        when it has been approved.
      </Text>
      <TextLink>For more information please visit:</TextLink>
      <Text
        style={{ color: 'blue' }}
        onPress={() => Linking.openURL('http://JoinDriverOne/driver_verification')}
      >
        http://JoinDriverOne/driver_verification
      </Text>
      <ReferralCodeContainer>
        <Label>Receive a referral code?</Label>
        <SubText>Enter it here to earn your bonus!</SubText>
        <View>
          <SubText>6 Digit Referral Code</SubText>
        </View>
        <InputContainer>
          <Input
            value={digits[0]}
            onChangeText={(value) => handleDigits(0, value)}
            containerStyle={styles.input}
          />
          <Input
            value={digits[1]}
            onChangeText={(value) => handleDigits(1, value)}
            containerStyle={styles.input}
          />
          <Input
            value={digits[2]}
            onChangeText={(value) => handleDigits(2, value)}
            containerStyle={styles.input}
          />
          <Input
            containerStyle={styles.input}
            value={digits[3]}
            onChangeText={(value) => handleDigits(3, value)}
          />
          <Input
            containerStyle={styles.input}
            value={digits[4]}
            onChangeText={(value) => handleDigits(4, value)}
          />
          <Input
            value={digits[5]}
            onChangeText={(value) => handleDigits(5, value)}
            containerStyle={styles.input}
          />
        </InputContainer>
      </ReferralCodeContainer>
    </Card>
  );
};

export default Policy;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 0,
    marginRight: 10,
    width: 30,
  },
});

const Text = styled.Text`
  margin-bottom: 25px;
`;

const TextLink = styled.Text``;

const ReferralCodeContainer = styled.View``;

const Label = styled.Text`
  font-size: 24px;
  margin-bottom: 11px;
`;

const SubText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
