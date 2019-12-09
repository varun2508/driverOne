import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import { navigate } from "@shared/helpers";

import { Sliders } from "./components";

const WelcomeScreen = ({ componentId }) => {
  const navigateTo = props => {
    const isLogIn = props === "Log In";
    console.log("------componentId----", componentId);
    navigate("AuthScreen", componentId, { isLogIn });
  };
  return (
    <LinearGradient colors={["#61aff4", "#2282d9"]} style={styles.container}>
      <Sliders />
      <ButtonContainer>
        <Button
          type="outline"
          title="SIGN UP"
          buttonStyle={styles.buttonColor}
          onPress={navigateTo}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 14
          }}
        />
        <Button
          title="LOG IN"
          buttonStyle={styles.button}
          onPress={() => navigateTo("Log In")}
          titleStyle={{
            fontWeight: "bold",
            fontSize: 14
          }}
        />
      </ButtonContainer>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#fff",
    width: 176,
    marginRight: 15,
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 8,
    height: 32,
    paddingTop: 3
  },
  button: {
    width: "100%",
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 8,
    height: 32,
    paddingTop: 3
  },
  container: {
    flex: 1
  }
});

// const Container = styled.View`
//   flex: 1;
//   background: #5baaf2;
// `;

const ButtonContainer = styled.View`
  height: 100px;
  display: flex;
  background-color: transparent;
  padding-left: 59px;
  padding-right: 59px;
  padding-top: 16px;
  flex-direction: row;
  justify-content: center;
`;
