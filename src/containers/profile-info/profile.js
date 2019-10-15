import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

import { Header, YourProfile, JobPreferences, Qualifications, Policy } from './components';

class Profile extends Component {
  static options() {
    return {
      topBar: {
        height: 0,
        visible: false,
        noBorder: true,
      },
    };
  }

  state = {
    firstName: null,
    lastName: null,
    location: 0,
    step: 1,
  };

  handleFirstName = (firstName) => this.setState({ firstName });

  handleLastName = (lastName) => this.setState({ lastName });

  handleLocation = (location) => this.setState({ location });

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  backStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { firstName, lastName, location, step } = this.state;
    const isActive = !(firstName && lastName && location);

    const arr = [
      <YourProfile
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleLocation={this.handleLocation}
        firstName={firstName}
        lastName={lastName}
        location={location}
      />,
      <JobPreferences />,
      <Qualifications />,
      <Policy />,
    ];

    return (
      <Container>
        <View>
          <Header />
          {arr[step]}
        </View>
        <View>
          <Dots>
            <Circle isActive={step === 0} />
            <Circle isActive={step === 1} />
            <Circle isActive={step === 2} />
            <Circle isActive={step === 3} />
          </Dots>
          {!step ? (
            <Button onPress={this.nextStep} title="Next" disabled={isActive} />
          ) : (
            <ButtonContainer>
              <Button
                containerStyle={styles.outline}
                onPress={this.backStep}
                title="Back"
                type="outline"
              />
              <Button containerStyle={styles.button} onPress={this.nextStep} title="Skip" />
            </ButtonContainer>
          )}
        </View>
      </Container>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },
  button: {
    flex: 1,
    height: 40,
  },
});

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between
  margin-bottom: 18px;
  padding-right: 21px;
  padding-left: 21px;
`;

const Dots = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 29px;
  margin-right: 40px;
  margin-left: 40px;
`;

const Circle = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 100;
  background-color: ${({ isActive }) => (isActive ? '#2090fb' : '#A7CBEE')};
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
