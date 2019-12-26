import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styled from 'styled-components/native';
import { observer } from 'mobx-react';
import User from '@mobx/user';
import { ConfirmUpdateButton } from '@shared/components/buttons';
import { Card, BackButton } from '@shared';
import {
  ProfileTitleContainer,
  OnboardingTitleContainer,
  Title
} from '../../../utils/stylesConstants';
const Qualifications = ({ screen, title, componentId }) => {
  const { profile, setProfileInfo } = User;

  const [classes, setClass] = useState(profile.classLicince);
  const [contractLength, setcontractLength] = useState(
    profile.contractLength || {}
  );

  const handleContract = value => {
    setcontractLength({ [value]: true });
    setProfileInfo({ contractLength: { [value]: true } });
  };

  const handleClass = value => {
    setClass(value);
    setProfileInfo({ classLicince: value });
  };

  return (
    <>
      <CardWrapper>
        <Card containerStyle={{ paddingBottom: 0 }}>
          {screen === 'onboarding' ? (
            <OnboardingTitleContainer>
              <Title>{title}</Title>
            </OnboardingTitleContainer>
          ) : (
            <ProfileTitleContainer>
              <Title>{title}</Title>
            </ProfileTitleContainer>
          )}
          {screen !== 'onboarding' && <BackButton componentId={componentId} />}
          <ClassesContainer>
            <Text>License Classes</Text>
            <Classes>
              <TouchableOpacity onPress={() => handleClass('A')}>
                <ButtonContainer isActvie={classes === 'A'}>
                  <ClassText isActvie={classes === 'A'}>A</ClassText>
                </ButtonContainer>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClass('B')}>
                <ButtonContainer isActvie={classes === 'B'}>
                  <ClassText isActvie={classes === 'B'}>B</ClassText>
                </ButtonContainer>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClass('C')}>
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
      </CardWrapper>
      {screen !== 'onboarding' && <ConfirmUpdateButton profile={profile} />}
    </>
  );
};

export default observer(Qualifications);

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    paddingBottom: 5,
    marginLeft: 0,
    backgroundColor: 'transparent'
  },
  text: {
    fontWeight: '100'
  }
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

const CardWrapper = styled.View`
  margin-right: 20px;
  margin-left: 20px;
`;
