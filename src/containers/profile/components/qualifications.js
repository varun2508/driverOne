import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styled from 'styled-components/native';

import Card from './card';

const Qualifications = () => {
  const [classes, setClass] = useState();
  const [contractLength, setContract] = useState({
    T: false,
    P: false,
    N: false,
    H: false,
    X: false,
    TC: false,
  });

  const handleContract = (value) => {
    const contractState = contractLength[value];
    setContract({ ...contractLength, [value]: !contractState });
  };
  return (
    <Card title="Your Qualifications">
      <ClassesContainer>
        <Text>License Classes</Text>
        <Classes>
          <TouchableOpacity onPress={() => setClass('A')}>
            <ButtonContainer isActvie={classes === 'A'}>
              <ClassText isActvie={classes === 'A'}>A</ClassText>
            </ButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setClass('B')}>
            <ButtonContainer isActvie={classes === 'B'}>
              <ClassText isActvie={classes === 'B'}>B</ClassText>
            </ButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setClass('C')}>
            <ButtonContainer isActvie={classes === 'C'}>
              <ClassText isActvie={classes === 'C'}>C</ClassText>
            </ButtonContainer>
          </TouchableOpacity>
        </Classes>
      </ClassesContainer>
      <Text style={{ marginBottom: 10 }}>Contract Length </Text>
      <CheckBox
        title="T - Double/Triple Trailers"
        checked={contractLength.T}
        onPress={() => handleContract('T')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
      <CheckBox
        title="P - Passenger"
        checked={contractLength.P}
        onPress={() => handleContract('P')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
      <CheckBox
        title="N - Tank Vehicle"
        checked={contractLength.N}
        onPress={() => handleContract('N')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
      <CheckBox
        title="H - Hazardous Materials"
        checked={contractLength.H}
        onPress={() => handleContract('H')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
      <CheckBox
        title="X - Combination of tank vehicle and hazardous materials endorsements"
        checked={contractLength.X}
        onPress={() => handleContract('X')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
      <CheckBox
        title="TC - TWIC card"
        checked={contractLength.TC}
        onPress={() => handleContract('TC')}
        containerStyle={styles.container}
        textStyle={styles.text}
      />
    </Card>
  );
};

export default Qualifications;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    paddingBottom: 5,
    marginLeft: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: '100',
  },
});

const ClassesContainer = styled.View`
  margin-bottom: 25px;
`;

const Classes = styled.View`
  display: flex;
  padding-top: 15px;
  flex-direction: row;
`;

const ClassText = styled.Text`
  color: ${({ isActvie }) => (!isActvie ? '#2182d9' : '#fff')};
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  width: 47px;
  height: 27px;
  margin-right: 15px;
  background-color: ${({ isActvie }) => (isActvie ? '#2182d9' : '#fff')};
  border-width: 1px;
  border-color: #2182d9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;