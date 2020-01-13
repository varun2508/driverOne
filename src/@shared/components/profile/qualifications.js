import React, { useState, useEffect } from 'react';
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

  const [classes, setClass] = useState(profile.license);
  const [endorsements, setEndorsements] = useState(profile.endorsement || {});

  const handleClass = value => {
    if (value === 'A') {
      setClass({
        a: true,
        b: false,
        c: false
      });
    }
    if (value === 'B') {
      setClass({
        a: false,
        b: true,
        c: false
      });
    }
    if (value === 'C') {
      setClass({
        a: false,
        b: false,
        c: true
      });
    }

    setProfileInfo({ license: classes });
  };

  const handleEndorsement = value => {
    setEndorsements({ ...endorsements, [value]: !endorsements[value] });
    // setProfileInfo({ contractLength: { [value]: true } });
  };

  useEffect(() => {
    setProfileInfo({
      endorsement: endorsements,
      license: classes
    });
  }, [classes, endorsements]);

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
                <ButtonContainer isActive={classes.a}>
                  <ClassText isActive={classes.a}>A</ClassText>
                </ButtonContainer>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClass('B')}>
                <ButtonContainer isActive={classes.b}>
                  <ClassText isActive={classes.b}>B</ClassText>
                </ButtonContainer>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClass('C')}>
                <ButtonContainer isActive={classes.c}>
                  <ClassText isActive={classes.c}>C</ClassText>
                </ButtonContainer>
              </TouchableOpacity>
            </Classes>
          </ClassesContainer>
          <Text style={{ marginBottom: 10 }}>Endorsements </Text>
          <CheckBox
            title="T - Double/Triple Trailers"
            checked={endorsements.t}
            onPress={() => handleEndorsement('t')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="P - Passenger"
            checked={endorsements.p}
            onPress={() => handleEndorsement('p')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="N - Tank Vehicle"
            checked={endorsements.n}
            onPress={() => handleEndorsement('n')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="H - Hazardous Materials"
            checked={endorsements.h}
            onPress={() => handleEndorsement('h')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="X - Combination of tank vehicle and hazardous materials endorsements"
            checked={endorsements.x}
            onPress={() => handleEndorsement('x')}
            containerStyle={styles.container}
            textStyle={styles.text}
          />
          <CheckBox
            title="TC - TWIC card"
            checked={endorsements.tc}
            onPress={() => handleEndorsement('tc')}
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
  color: ${({ isActive }) => (!isActive ? '#2182d9' : '#fff')};
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  width: 47px;
  height: 27px;
  margin-right: 15px;
  background-color: ${({ isActive }) => (isActive ? '#2182d9' : '#fff')};
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
