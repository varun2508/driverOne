import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-elements";
import { observer } from "mobx-react";
import { goHome } from "navigation";

import User from "@mobx/user";
import Auth from "@mobx/auth";
import {
  Header,
  YourProfile,
  JobPreferences,
  Qualifications,
  Policy,
  Buttons
} from "./components";

@observer
class Profile extends Component {
  static options() {
    return {
      topBar: {
        height: 0,
        visible: false,
        noBorder: true
      }
    };
  }

  state = {
    step: 0,
    loading: true
  };

  componentDidMount() {
    console.log("----------effect");
    this.fetchData();
    this.setState({
      loading: true
    });
  }

  fetchData = async () => {
    await Auth.getMe();
    const { first_name, last_name } = User.profile;
    this.setState({
      loading: false
    });
    console.log("------first_name----", first_name);
    console.log("------last_name----", last_name);

    if (first_name && last_name) {
      console.log("------componentId----", this.props.componentId);
      // goHome();
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  backStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    const { profile } = User;

    const { first_name: firstName, last_name: lastName, locationId } = profile;
    const isActive = !(firstName && lastName && locationId);

    const arr = [
      <YourProfile />,
      <JobPreferences />,
      <Qualifications />,
      <Policy />
    ];

    if (this.state.loading) {
      return (
        <Container>
          <ActivityIndicator size="small" color="#61aff4" />
        </Container>
      );
    }

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
              <Buttons nextStep={this.nextStep} step={step} />
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
    marginRight: 10
  },
  button: {
    flex: 1,
    height: 40
  }
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
  background-color: ${({ isActive }) => (isActive ? "#2090fb" : "#A7CBEE")};
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
