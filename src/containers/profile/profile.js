import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

import { Header, Card, YourProfile } from './components';

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
  };

  handleFirstName = (firstName) => this.setState({ firstName });

  handleLastName = (lastName) => this.setState({ lastName });

  handleLocation = (location) => this.setState({ location });

  render() {
    const { firstName, lastName, location } = this.state;
    const isActive = !(firstName && lastName && location);

    return (
      <Container>
        <View>
          <Header />
          <Card title="Your Profile">
            <YourProfile
              handleFirstName={this.handleFirstName}
              handleLastName={this.handleLastName}
              handleLocation={this.handleLocation}
              firstName={firstName}
              lastName={lastName}
              location={location}
            />
          </Card>
        </View>
        <View>
          <Dots>
            <Circle isActive />
            <Circle />
            <Circle />
            <Circle />
          </Dots>
          <Button disabled={isActive} onPress={() => {}} title="Next" />
        </View>
      </Container>
    );
  }
}

export default Profile;

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
  background-color: ${({ isActive }) => (isActive ? '#2090fb' : '#66b0f6')};
`;
